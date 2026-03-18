'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  DashboardIcon,
  ProductIcon,
  SyncIcon,
  SettingsIcon,
  LogsIcon,
  LogOutIcon,
} from '@/components/icons';

const menuItems = [
  { href: '/', icon: DashboardIcon, label: 'Dashboard' },
  { href: '/productos', icon: ProductIcon, label: 'Productos' },
  { href: '/sincronizacion', icon: SyncIcon, label: 'Sincronización' },
  { href: '/logs', icon: LogsIcon, label: 'Logs' },
  { href: '/configuracion', icon: SettingsIcon, label: 'Configuración' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-dark-900 text-white flex flex-col z-50">
      {/* Logo */}
      <div className="p-6 border-b border-dark-700">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
            <span className="text-dark-900 font-bold text-xl">M</span>
          </div>
          <div>
            <span className="text-lg font-bold">ML Sync</span>
            <p className="text-xs text-dark-400">Panel de Control</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    isActive
                      ? 'bg-primary-500 text-dark-900'
                      : 'text-dark-300 hover:bg-dark-800 hover:text-white'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Sync Status */}
      <div className="p-4 border-t border-dark-700">
        <div className="bg-dark-800 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-dark-300">Sistema activo</span>
          </div>
          <p className="text-xs text-dark-400">Última sync: hace 5 min</p>
        </div>
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-dark-700">
        <button className="flex items-center gap-3 px-4 py-3 text-dark-300 hover:text-white w-full rounded-xl hover:bg-dark-800 transition-colors">
          <LogOutIcon className="w-5 h-5" />
          <span className="font-medium">Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
}
