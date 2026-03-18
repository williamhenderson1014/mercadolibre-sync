'use client';

import { useState } from 'react';
import {
  SearchIcon,
  FilterIcon,
  ChevronDownIcon,
  CheckCircleIcon,
  AlertIcon,
  XCircleIcon,
  DownloadIcon,
  RefreshIcon,
} from '@/components/icons';
import { syncLogs, formatDateTime, getStatusLabel, getStatusColor } from '@/data/mockData';

export default function LogsPage() {
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [typeFilter, setTypeFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLogs = syncLogs.filter(log => {
    if (statusFilter && log.status !== statusFilter) return false;
    if (typeFilter && log.type !== typeFilter) return false;
    if (searchQuery && !log.message.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !(log.productName?.toLowerCase().includes(searchQuery.toLowerCase()))) return false;
    return true;
  });

  const getTypeLabel = (type: string): string => {
    const labels: Record<string, string> = {
      scrape: 'Scraping',
      sync: 'Sincronización',
      publish: 'Publicación',
      update: 'Actualización',
      pause: 'Pausado',
      error: 'Error',
    };
    return labels[type] || type;
  };

  const getTypeColor = (type: string): string => {
    const colors: Record<string, string> = {
      scrape: 'bg-purple-100 text-purple-700',
      sync: 'bg-blue-100 text-blue-700',
      publish: 'bg-green-100 text-green-700',
      update: 'bg-cyan-100 text-cyan-700',
      pause: 'bg-yellow-100 text-yellow-700',
      error: 'bg-red-100 text-red-700',
    };
    return colors[type] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-dark-900">Logs de Actividad</h1>
          <p className="text-dark-500 mt-1">Historial de sincronizaciones y eventos del sistema</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-dark-700 hover:bg-gray-50">
            <DownloadIcon className="w-5 h-5" />
            Exportar
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-primary text-dark-900 rounded-lg font-medium hover:opacity-90">
            <RefreshIcon className="w-5 h-5" />
            Actualizar
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
              placeholder="Buscar en logs..."
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
                <option value="success">Éxito</option>
                <option value="warning">Advertencia</option>
                <option value="error">Error</option>
              </select>
              <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-400 pointer-events-none" />
            </div>
            <div className="relative">
              <select
                value={typeFilter || ''}
                onChange={(e) => setTypeFilter(e.target.value || null)}
                className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-10 focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Todos los tipos</option>
                <option value="scrape">Scraping</option>
                <option value="sync">Sincronización</option>
                <option value="publish">Publicación</option>
                <option value="update">Actualización</option>
                <option value="pause">Pausado</option>
                <option value="error">Error</option>
              </select>
              <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Logs List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="divide-y divide-gray-100">
          {filteredLogs.map((log) => {
            const Icon = log.status === 'success' ? CheckCircleIcon : log.status === 'error' ? XCircleIcon : AlertIcon;
            const iconBg = log.status === 'success' ? 'bg-green-100' : log.status === 'error' ? 'bg-red-100' : 'bg-yellow-100';
            const iconColor = log.status === 'success' ? 'text-green-600' : log.status === 'error' ? 'text-red-600' : 'text-yellow-600';

            return (
              <div key={log.id} className="p-4 hover:bg-gray-50">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${iconBg}`}>
                    <Icon className={`w-5 h-5 ${iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getTypeColor(log.type)}`}>
                        {getTypeLabel(log.type)}
                      </span>
                      <span className="text-sm text-dark-400">{formatDateTime(log.timestamp)}</span>
                    </div>
                    <p className="font-medium text-dark-900">{log.message}</p>
                    {log.productName && (
                      <p className="text-sm text-dark-500 mt-1">Producto: {log.productName}</p>
                    )}
                    {log.details && (
                      <p className="text-sm text-dark-400 mt-1 font-mono bg-gray-50 px-2 py-1 rounded inline-block">
                        {log.details}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredLogs.length === 0 && (
          <div className="p-12 text-center">
            <p className="text-dark-500">No se encontraron logs con los filtros seleccionados</p>
          </div>
        )}
      </div>
    </div>
  );
}
