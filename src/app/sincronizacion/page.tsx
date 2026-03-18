'use client';

import { useState } from 'react';
import {
  SyncIcon,
  PlayIcon,
  PauseIcon,
  ClockIcon,
  CheckCircleIcon,
  RefreshIcon,
  SettingsIcon,
} from '@/components/icons';
import { syncJobs, formatDateTime, formatTime, getStatusLabel, getStatusColor } from '@/data/mockData';

export default function SincronizacionPage() {
  const [isRunning, setIsRunning] = useState(false);

  const handleStartSync = () => {
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-dark-900">Sincronización</h1>
          <p className="text-dark-500 mt-1">Control de tareas de sincronización y scraping</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <button
          onClick={handleStartSync}
          disabled={isRunning}
          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-left group"
        >
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
            <SyncIcon className={`w-6 h-6 text-blue-600 ${isRunning ? 'animate-spin' : ''}`} />
          </div>
          <h3 className="font-semibold text-dark-900">Sincronización Completa</h3>
          <p className="text-sm text-dark-500 mt-1">Actualizar precios y stock de todos los productos</p>
        </button>

        <button className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-left group">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
            <RefreshIcon className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="font-semibold text-dark-900">Ejecutar Scraping</h3>
          <p className="text-sm text-dark-500 mt-1">Extraer productos del sitio del proveedor</p>
        </button>

        <button className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-left group">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
            <PlayIcon className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-semibold text-dark-900">Publicar Nuevos</h3>
          <p className="text-sm text-dark-500 mt-1">Publicar productos pendientes en ML</p>
        </button>

        <button className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-left group">
          <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors">
            <PauseIcon className="w-6 h-6 text-yellow-600" />
          </div>
          <h3 className="font-semibold text-dark-900">Pausar Sin Stock</h3>
          <p className="text-sm text-dark-500 mt-1">Pausar publicaciones sin stock disponible</p>
        </button>
      </div>

      {/* Running Job */}
      {isRunning && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <SyncIcon className="w-6 h-6 text-blue-600 animate-spin" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-blue-800">Sincronización en progreso...</h3>
              <div className="mt-2">
                <div className="flex justify-between text-sm text-blue-600 mb-1">
                  <span>Procesando productos</span>
                  <span>45%</span>
                </div>
                <div className="bg-blue-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-[45%] transition-all" />
                </div>
              </div>
            </div>
            <button className="px-4 py-2 bg-white border border-blue-300 rounded-lg text-blue-600 font-medium hover:bg-blue-50">
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Scheduled Jobs */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-dark-900">Tareas Programadas</h2>
            <button className="flex items-center gap-2 text-primary-600 font-medium text-sm hover:underline">
              <SettingsIcon className="w-4 h-4" />
              Configurar horarios
            </button>
          </div>
        </div>
        <div className="divide-y divide-gray-100">
          {syncJobs.map((job) => (
            <div key={job.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    job.status === 'running' ? 'bg-blue-100' :
                    job.status === 'completed' ? 'bg-green-100' :
                    job.status === 'scheduled' ? 'bg-purple-100' : 'bg-red-100'
                  }`}>
                    <SyncIcon className={`w-5 h-5 ${
                      job.status === 'running' ? 'text-blue-600 animate-spin' :
                      job.status === 'completed' ? 'text-green-600' :
                      job.status === 'scheduled' ? 'text-purple-600' : 'text-red-600'
                    }`} />
                  </div>
                  <div>
                    <h3 className="font-medium text-dark-900">{job.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-dark-500 mt-1">
                      {job.startedAt && (
                        <span>Iniciado: {formatTime(job.startedAt)}</span>
                      )}
                      {job.completedAt && (
                        <span>Completado: {formatTime(job.completedAt)}</span>
                      )}
                      {job.nextRun && (
                        <span className="flex items-center gap-1">
                          <ClockIcon className="w-4 h-4" />
                          Próxima: {formatTime(job.nextRun)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {job.status === 'running' && (
                    <div className="text-right">
                      <span className="text-sm text-dark-500">{job.progress}%</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                        <div
                          className="bg-primary-500 h-2 rounded-full transition-all"
                          style={{ width: `${job.progress}%` }}
                        />
                      </div>
                    </div>
                  )}
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(job.status)}`}>
                    {getStatusLabel(job.status)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Schedule Configuration */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-dark-900 mb-6">Configuración de Horarios</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-dark-900">Sincronización de Precios</h3>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
              </label>
            </div>
            <div>
              <label className="block text-sm text-dark-600 mb-2">Ejecutar cada</label>
              <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500">
                <option>15 minutos</option>
                <option selected>30 minutos</option>
                <option>1 hora</option>
                <option>2 horas</option>
              </select>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-dark-900">Scraping de Proveedor</h3>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
              </label>
            </div>
            <div>
              <label className="block text-sm text-dark-600 mb-2">Ejecutar cada</label>
              <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500">
                <option>1 hora</option>
                <option selected>2 horas</option>
                <option>4 horas</option>
                <option>6 horas</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
