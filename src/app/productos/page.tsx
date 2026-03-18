'use client';

import { useState } from 'react';
import {
  SearchIcon,
  FilterIcon,
  ChevronDownIcon,
  EditIcon,
  EyeIcon,
  RefreshIcon,
  PlayIcon,
  PauseIcon,
  UploadIcon,
} from '@/components/icons';
import {
  products,
  formatCurrency,
  formatDateTime,
  getStatusLabel,
  getStatusColor,
} from '@/data/mockData';

export default function ProductosPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  const filteredProducts = products.filter(product => {
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase()) && !product.sku.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (statusFilter && product.mlStatus !== statusFilter) return false;
    if (categoryFilter && product.category !== categoryFilter) return false;
    return true;
  });

  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-dark-900">Productos</h1>
          <p className="text-dark-500 mt-1">Gestiona todos los productos sincronizados</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-dark-700 hover:bg-gray-50">
            <UploadIcon className="w-5 h-5" />
            Importar
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-primary text-dark-900 rounded-lg font-medium hover:opacity-90">
            <RefreshIcon className="w-5 h-5" />
            Sincronizar Todo
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
            <input
              type="text"
              placeholder="Buscar por nombre o SKU..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <select
                value={statusFilter || ''}
                onChange={(e) => setStatusFilter(e.target.value || null)}
                className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-10 focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Todos los estados</option>
                <option value="active">Activo</option>
                <option value="paused">Pausado</option>
                <option value="not_listed">Sin publicar</option>
                <option value="error">Error</option>
              </select>
              <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-400 pointer-events-none" />
            </div>
            <div className="relative">
              <select
                value={categoryFilter || ''}
                onChange={(e) => setCategoryFilter(e.target.value || null)}
                className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-10 focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Todas las categorías</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-dark-700">Producto</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-dark-700">SKU</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-dark-700">Categoría</th>
                <th className="text-right px-6 py-4 text-sm font-semibold text-dark-700">Precio Costo</th>
                <th className="text-right px-6 py-4 text-sm font-semibold text-dark-700">Precio Venta</th>
                <th className="text-center px-6 py-4 text-sm font-semibold text-dark-700">Margen</th>
                <th className="text-center px-6 py-4 text-sm font-semibold text-dark-700">Stock</th>
                <th className="text-center px-6 py-4 text-sm font-semibold text-dark-700">Estado</th>
                <th className="text-center px-6 py-4 text-sm font-semibold text-dark-700">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="max-w-xs">
                      <p className="font-medium text-dark-900 truncate">{product.name}</p>
                      <p className="text-xs text-dark-400 truncate">{product.brand}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-mono text-sm text-dark-600">{product.sku}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-dark-600">{product.category}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-sm text-dark-600">{formatCurrency(product.supplierPrice)}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="font-semibold text-dark-900">{formatCurrency(product.sellingPrice)}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm font-medium text-green-600">{product.margin}%</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`font-medium ${product.stock === 0 ? 'text-red-600' : product.stock < 10 ? 'text-yellow-600' : 'text-dark-900'}`}>
                      {product.stock}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.mlStatus)}`}>
                      {getStatusLabel(product.mlStatus)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 text-dark-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg" title="Ver detalles">
                        <EyeIcon className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-dark-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg" title="Editar">
                        <EditIcon className="w-4 h-4" />
                      </button>
                      {product.mlStatus === 'active' ? (
                        <button className="p-2 text-dark-400 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg" title="Pausar">
                          <PauseIcon className="w-4 h-4" />
                        </button>
                      ) : product.mlStatus === 'paused' ? (
                        <button className="p-2 text-dark-400 hover:text-green-600 hover:bg-green-50 rounded-lg" title="Activar">
                          <PlayIcon className="w-4 h-4" />
                        </button>
                      ) : null}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredProducts.length === 0 && (
          <div className="p-12 text-center">
            <p className="text-dark-500">No se encontraron productos con los filtros seleccionados</p>
          </div>
        )}

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
          <p className="text-sm text-dark-500">
            Mostrando {filteredProducts.length} de {products.length} productos
          </p>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-dark-600 hover:bg-gray-50 disabled:opacity-50" disabled>
              Anterior
            </button>
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-dark-600 hover:bg-gray-50 disabled:opacity-50" disabled>
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
