'use client';

import { useState } from 'react';
import {
  DollarIcon,
  SettingsIcon,
  LinkIcon,
  ClockIcon,
  CheckCircleIcon,
} from '@/components/icons';
import { marginConfigs, formatCurrency } from '@/data/mockData';

export default function ConfiguracionPage() {
  const [activeTab, setActiveTab] = useState('margenes');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const tabs = [
    { id: 'margenes', name: 'Márgenes', icon: DollarIcon },
    { id: 'proveedor', name: 'Proveedor', icon: LinkIcon },
    { id: 'sincronizacion', name: 'Sincronización', icon: ClockIcon },
    { id: 'mercadolibre', name: 'Mercado Libre', icon: SettingsIcon },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-dark-900">Configuración</h1>
          <p className="text-dark-500 mt-1">Ajustes del sistema de sincronización</p>
        </div>
        {saved && (
          <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-lg">
            <CheckCircleIcon className="w-5 h-5" />
            <span className="font-medium">Cambios guardados</span>
          </div>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Tabs */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-sm p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-dark-600 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-medium">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          {activeTab === 'margenes' && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-dark-900 mb-6">Configuración de Márgenes por Categoría</h2>
              <div className="space-y-6">
                {marginConfigs.map((config) => (
                  <div key={config.id} className="border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-semibold text-dark-900">{config.category}</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked={config.isActive} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                        <span className="ml-2 text-sm text-dark-500">Activo</span>
                      </label>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-dark-700 mb-2">Margen (%)</label>
                        <input
                          type="number"
                          defaultValue={config.marginPercent}
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-700 mb-2">Mínimo (%)</label>
                        <input
                          type="number"
                          defaultValue={config.minMargin}
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-700 mb-2">Máximo (%)</label>
                        <input
                          type="number"
                          defaultValue={config.maxMargin}
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  onClick={handleSave}
                  className="w-full bg-gradient-primary text-dark-900 py-3 rounded-xl font-semibold hover:opacity-90"
                >
                  Guardar Cambios
                </button>
              </div>
            </div>
          )}

          {activeTab === 'proveedor' && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-dark-900 mb-6">Configuración del Proveedor</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Nombre del Proveedor</label>
                  <input
                    type="text"
                    defaultValue="Proveedor Principal"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">URL del Catálogo</label>
                  <input
                    type="url"
                    defaultValue="https://proveedor.com/catalogo"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Intervalo de Scraping (minutos)</label>
                  <input
                    type="number"
                    defaultValue={120}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-dark-600">
                    <strong>Último scraping:</strong> 18/03/2026 12:00
                  </p>
                  <p className="text-sm text-dark-600">
                    <strong>Productos extraídos:</strong> 156
                  </p>
                </div>
                <button
                  onClick={handleSave}
                  className="w-full bg-gradient-primary text-dark-900 py-3 rounded-xl font-semibold hover:opacity-90"
                >
                  Guardar Cambios
                </button>
              </div>
            </div>
          )}

          {activeTab === 'sincronizacion' && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-dark-900 mb-6">Configuración de Sincronización</h2>
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="font-medium text-dark-900">Sincronización Automática</p>
                      <p className="text-sm text-dark-500">Sincronizar precios y stock automáticamente</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                    </label>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">Intervalo (minutos)</label>
                    <input
                      type="number"
                      defaultValue={30}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-dark-900">Pausar sin Stock</p>
                      <p className="text-sm text-dark-500">Pausar publicaciones automáticamente cuando el stock llegue a 0</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                    </label>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-dark-900">Notificaciones de Error</p>
                      <p className="text-sm text-dark-500">Recibir alertas cuando ocurran errores de sincronización</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                    </label>
                  </div>
                </div>

                <button
                  onClick={handleSave}
                  className="w-full bg-gradient-primary text-dark-900 py-3 rounded-xl font-semibold hover:opacity-90"
                >
                  Guardar Cambios
                </button>
              </div>
            </div>
          )}

          {activeTab === 'mercadolibre' && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-dark-900 mb-6">Integración con Mercado Libre</h2>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-medium text-green-800">Cuenta conectada</p>
                      <p className="text-sm text-green-600">usuario_ml@email.com</p>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Client ID</label>
                  <input
                    type="text"
                    defaultValue="••••••••••••1234"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Access Token</label>
                  <input
                    type="password"
                    defaultValue="••••••••••••••••"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500"
                    readOnly
                  />
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 py-3 border border-gray-200 rounded-xl font-semibold text-dark-700 hover:bg-gray-50">
                    Renovar Token
                  </button>
                  <button className="flex-1 py-3 border border-red-200 rounded-xl font-semibold text-red-600 hover:bg-red-50">
                    Desconectar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
