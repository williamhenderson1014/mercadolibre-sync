'use client';

import Link from 'next/link';
import {
  ProductIcon,
  SyncIcon,
  TrendUpIcon,
  DollarIcon,
  AlertIcon,
  CheckCircleIcon,
  PauseIcon,
  XCircleIcon,
  ChevronRightIcon,
  RefreshIcon,
  ClockIcon,
} from '@/components/icons';
import {
  getDashboardStats,
  products,
  syncLogs,
  syncJobs,
  formatCurrency,
  formatTime,
  getStatusLabel,
  getStatusColor,
} from '@/data/mockData';

export default function Dashboard() {
  const stats = getDashboardStats();
  const recentLogs = syncLogs.slice(0, 5);
  const activeJobs = syncJobs.filter(j => j.status === 'running');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-dark-900">Dashboard</h1>
          <p className="text-dark-500 mt-1">Resumen del sistema de sincronización</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-dark-700 hover:bg-gray-50">
            <RefreshIcon className="w-5 h-5" />
            Sincronizar Ahora
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-primary text-dark-900 rounded-lg font-medium hover:opacity-90">
            <SyncIcon className="w-5 h-5" />
            Ejecutar Scraping
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-dark-500 text-sm">Total Productos</p>
              <p className="text-3xl font-bold text-dark-900 mt-1">{stats.totalProducts}</p>
            </div>
            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
              <ProductIcon className="w-6 h-6 text-primary-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-dark-500 text-sm">Publicaciones Activas</p>
              <p className="text-3xl font-bold text-green-600 mt-1">{stats.activeListings}</p>
            </div>
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
              <CheckCircleIcon className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-dark-500 text-sm">Pausadas / Errores</p>
              <p className="text-3xl font-bold text-dark-900 mt-1">
                <span className="text-yellow-600">{stats.pausedListings}</span>
                <span className="text-dark-300 mx-1">/</span>
                <span className="text-red-600">{stats.errorListings}</span>
              </p>
            </div>
            <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center">
              <AlertIcon className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-dark-500 text-sm">Margen Promedio</p>
              <p className="text-3xl font-bold text-dark-900 mt-1">{stats.averageMargin}%</p>
            </div>
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
              <TrendUpIcon className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Active Jobs Alert */}
      {activeJobs.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <SyncIcon className="w-5 h-5 text-blue-600 animate-spin" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-blue-800">{activeJobs[0].name} en progreso</p>
              <div className="flex items-center gap-4 mt-1">
                <div className="flex-1 bg-blue-200 rounded-full h-2 max-w-xs">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${activeJobs[0].progress}%` }}
                  />
                </div>
                <span className="text-sm text-blue-600">
                  {activeJobs[0].processedProducts}/{activeJobs[0].totalProducts} productos
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Products */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-dark-900">Productos Recientes</h2>
            <Link href="/productos" className="text-primary-600 text-sm font-medium flex items-center gap-1">
              Ver todos <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </div>
          <div className="divide-y divide-gray-50">
            {products.slice(0, 5).map((product) => (
              <div key={product.id} className="p-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-dark-900 truncate">{product.name}</p>
                    <div className="flex items-center gap-3 text-sm text-dark-500 mt-1">
                      <span>{product.sku}</span>
                      <span>•</span>
                      <span>Stock: {product.stock}</span>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <p className="font-semibold text-dark-900">{formatCurrency(product.sellingPrice)}</p>
                    <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(product.mlStatus)}`}>
                      {getStatusLabel(product.mlStatus)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Logs */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-dark-900">Actividad Reciente</h2>
            <Link href="/logs" className="text-primary-600 text-sm font-medium flex items-center gap-1">
              Ver todos <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </div>
          <div className="divide-y divide-gray-50">
            {recentLogs.map((log) => {
              const Icon = log.status === 'success' ? CheckCircleIcon : log.status === 'error' ? XCircleIcon : AlertIcon;
              const iconColor = log.status === 'success' ? 'text-green-600' : log.status === 'error' ? 'text-red-600' : 'text-yellow-600';
              return (
                <div key={log.id} className="p-4 hover:bg-gray-50">
                  <div className="flex items-start gap-3">
                    <Icon className={`w-5 h-5 ${iconColor} mt-0.5`} />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-dark-900">{log.message}</p>
                      {log.productName && (
                        <p className="text-sm text-dark-500">{log.productName}</p>
                      )}
                      {log.details && (
                        <p className="text-sm text-dark-400 mt-1">{log.details}</p>
                      )}
                    </div>
                    <span className="text-xs text-dark-400">{formatTime(log.timestamp)}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scheduled Jobs */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-dark-900">Tareas Programadas</h2>
          <Link href="/sincronizacion" className="text-primary-600 text-sm font-medium flex items-center gap-1">
            Configurar <ChevronRightIcon className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-4 p-6">
          {syncJobs.map((job) => (
            <div key={job.id} className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-dark-900">{job.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                  {getStatusLabel(job.status)}
                </span>
              </div>
              {job.status === 'running' && (
                <div className="mb-3">
                  <div className="flex justify-between text-sm text-dark-500 mb-1">
                    <span>Progreso</span>
                    <span>{job.progress}%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-500 h-2 rounded-full transition-all"
                      style={{ width: `${job.progress}%` }}
                    />
                  </div>
                </div>
              )}
              {job.nextRun && (
                <div className="flex items-center gap-2 text-sm text-dark-500">
                  <ClockIcon className="w-4 h-4" />
                  <span>Próxima: {formatTime(job.nextRun)}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
