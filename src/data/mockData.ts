import { Product, SyncLog, SyncJob, MarginConfig, DashboardStats, Category } from '@/types';

export const products: Product[] = [
  {
    id: 'p1',
    sku: 'ELEC-001',
    name: 'Auriculares Bluetooth TWS Pro',
    normalizedTitle: 'Auriculares Inalámbricos Bluetooth TWS Pro Con Estuche De Carga',
    description: 'Auriculares inalámbricos con cancelación de ruido activa, batería de larga duración y estuche de carga.',
    brand: 'TechSound',
    category: 'Electrónica',
    supplierPrice: 2500,
    sellingPrice: 3750,
    margin: 50,
    stock: 145,
    images: ['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400'],
    supplierUrl: 'https://proveedor.com/auriculares-tws',
    mlListingId: 'MLA123456789',
    mlStatus: 'active',
    lastSync: '2026-03-18T14:30:00',
    createdAt: '2026-02-15T10:00:00',
  },
  {
    id: 'p2',
    sku: 'ELEC-002',
    name: 'Smartwatch Deportivo GPS',
    normalizedTitle: 'Smartwatch Reloj Inteligente Deportivo Con GPS Y Monitor Cardíaco',
    description: 'Reloj inteligente con GPS integrado, monitor de frecuencia cardíaca y resistente al agua.',
    brand: 'FitTech',
    category: 'Electrónica',
    supplierPrice: 8500,
    sellingPrice: 12750,
    margin: 50,
    stock: 32,
    images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400'],
    supplierUrl: 'https://proveedor.com/smartwatch-gps',
    mlListingId: 'MLA987654321',
    mlStatus: 'active',
    lastSync: '2026-03-18T14:30:00',
    createdAt: '2026-02-18T09:30:00',
  },
  {
    id: 'p3',
    sku: 'HOG-001',
    name: 'Aspiradora Robot Inteligente',
    normalizedTitle: 'Aspiradora Robot Automática Inteligente Con App Y Mapeo Láser',
    description: 'Robot aspiradora con navegación láser, control por app y programación semanal.',
    brand: 'CleanBot',
    category: 'Hogar',
    supplierPrice: 45000,
    sellingPrice: 63000,
    margin: 40,
    stock: 8,
    images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'],
    supplierUrl: 'https://proveedor.com/robot-aspiradora',
    mlListingId: 'MLA456789123',
    mlStatus: 'active',
    lastSync: '2026-03-18T14:25:00',
    createdAt: '2026-02-20T11:15:00',
  },
  {
    id: 'p4',
    sku: 'ELEC-003',
    name: 'Cargador Inalámbrico 15W',
    normalizedTitle: 'Cargador Inalámbrico Rápido 15W Para iPhone Samsung Xiaomi',
    description: 'Cargador inalámbrico de carga rápida compatible con todos los smartphones Qi.',
    brand: 'PowerMax',
    category: 'Electrónica',
    supplierPrice: 1200,
    sellingPrice: 1920,
    margin: 60,
    stock: 0,
    images: ['https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=400'],
    supplierUrl: 'https://proveedor.com/cargador-wireless',
    mlListingId: 'MLA789123456',
    mlStatus: 'paused',
    lastSync: '2026-03-18T14:30:00',
    createdAt: '2026-02-22T14:00:00',
  },
  {
    id: 'p5',
    sku: 'HOG-002',
    name: 'Lámpara LED Smart WiFi',
    normalizedTitle: 'Lámpara LED Inteligente WiFi RGB Compatible Alexa Google Home',
    description: 'Lámpara inteligente con millones de colores, control por voz y app.',
    brand: 'LightSmart',
    category: 'Hogar',
    supplierPrice: 800,
    sellingPrice: 1280,
    margin: 60,
    stock: 89,
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400'],
    supplierUrl: 'https://proveedor.com/lampara-smart',
    mlListingId: 'MLA321654987',
    mlStatus: 'active',
    lastSync: '2026-03-18T14:28:00',
    createdAt: '2026-02-25T08:45:00',
  },
  {
    id: 'p6',
    sku: 'ELEC-004',
    name: 'Parlante Bluetooth Portátil',
    normalizedTitle: 'Parlante Bluetooth Portátil 20W Resistente Al Agua IPX7',
    description: 'Parlante portátil con sonido potente, resistente al agua y 12 horas de batería.',
    brand: 'SoundMax',
    category: 'Electrónica',
    supplierPrice: 3200,
    sellingPrice: 4800,
    margin: 50,
    stock: 56,
    images: ['https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400'],
    supplierUrl: 'https://proveedor.com/parlante-bt',
    mlListingId: 'MLA654321789',
    mlStatus: 'active',
    lastSync: '2026-03-18T14:30:00',
    createdAt: '2026-03-01T10:20:00',
  },
  {
    id: 'p7',
    sku: 'ELEC-005',
    name: 'Power Bank 20000mAh',
    normalizedTitle: 'Power Bank Batería Externa 20000mAh Carga Rápida USB-C PD',
    description: 'Batería externa de alta capacidad con carga rápida y múltiples puertos.',
    brand: 'PowerMax',
    category: 'Electrónica',
    supplierPrice: 4500,
    sellingPrice: 6750,
    margin: 50,
    stock: 23,
    images: ['https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400'],
    supplierUrl: 'https://proveedor.com/powerbank',
    mlStatus: 'not_listed',
    lastSync: '2026-03-18T14:00:00',
    createdAt: '2026-03-10T15:30:00',
  },
  {
    id: 'p8',
    sku: 'HOG-003',
    name: 'Cafetera Express Automática',
    normalizedTitle: 'Cafetera Express Automática 15 Bar Con Espumador De Leche',
    description: 'Cafetera express con bomba de 15 bar, espumador de leche y depósito grande.',
    brand: 'CoffeePro',
    category: 'Hogar',
    supplierPrice: 28000,
    sellingPrice: 39200,
    margin: 40,
    stock: 12,
    images: ['https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400'],
    supplierUrl: 'https://proveedor.com/cafetera-express',
    mlListingId: 'MLA111222333',
    mlStatus: 'error',
    lastSync: '2026-03-18T13:45:00',
    createdAt: '2026-03-05T09:00:00',
  },
];

export const syncLogs: SyncLog[] = [
  { id: 'log1', type: 'sync', status: 'success', message: 'Sincronización completa exitosa', details: '8 productos actualizados', timestamp: '2026-03-18T14:30:00' },
  { id: 'log2', type: 'pause', status: 'warning', message: 'Publicación pausada por sin stock', productId: 'p4', productName: 'Cargador Inalámbrico 15W', timestamp: '2026-03-18T14:30:00' },
  { id: 'log3', type: 'update', status: 'success', message: 'Precio actualizado', productId: 'p1', productName: 'Auriculares Bluetooth TWS Pro', details: '$3,500 → $3,750', timestamp: '2026-03-18T14:28:00' },
  { id: 'log4', type: 'error', status: 'error', message: 'Error al actualizar publicación', productId: 'p8', productName: 'Cafetera Express Automática', details: 'API error: item_id inválido', timestamp: '2026-03-18T13:45:00' },
  { id: 'log5', type: 'scrape', status: 'success', message: 'Scraping completado', details: '156 productos extraídos del proveedor', timestamp: '2026-03-18T12:00:00' },
  { id: 'log6', type: 'sync', status: 'success', message: 'Sincronización de stock', details: '45 productos con cambios de stock', timestamp: '2026-03-18T10:00:00' },
  { id: 'log7', type: 'publish', status: 'success', message: 'Nueva publicación creada', productId: 'p6', productName: 'Parlante Bluetooth Portátil', details: 'MLA654321789', timestamp: '2026-03-18T09:30:00' },
  { id: 'log8', type: 'update', status: 'success', message: 'Stock actualizado', productId: 'p3', productName: 'Aspiradora Robot Inteligente', details: '15 → 8 unidades', timestamp: '2026-03-18T08:15:00' },
];

export const syncJobs: SyncJob[] = [
  {
    id: 'job1',
    name: 'Sincronización Completa',
    type: 'full_sync',
    status: 'completed',
    progress: 100,
    totalProducts: 156,
    processedProducts: 156,
    startedAt: '2026-03-18T14:25:00',
    completedAt: '2026-03-18T14:30:00',
    nextRun: '2026-03-18T16:30:00',
  },
  {
    id: 'job2',
    name: 'Scraping Proveedor',
    type: 'scrape',
    status: 'scheduled',
    progress: 0,
    totalProducts: 0,
    processedProducts: 0,
    startedAt: '',
    nextRun: '2026-03-18T18:00:00',
  },
  {
    id: 'job3',
    name: 'Actualización de Precios',
    type: 'price_sync',
    status: 'running',
    progress: 65,
    totalProducts: 156,
    processedProducts: 101,
    startedAt: '2026-03-18T14:35:00',
  },
];

export const marginConfigs: MarginConfig[] = [
  { id: 'm1', category: 'Electrónica', marginPercent: 50, minMargin: 30, maxMargin: 80, isActive: true },
  { id: 'm2', category: 'Hogar', marginPercent: 40, minMargin: 25, maxMargin: 60, isActive: true },
  { id: 'm3', category: 'Accesorios', marginPercent: 60, minMargin: 40, maxMargin: 100, isActive: true },
  { id: 'm4', category: 'Deportes', marginPercent: 45, minMargin: 30, maxMargin: 70, isActive: false },
];

export const categories: Category[] = [
  { id: 'cat1', name: 'Electrónica', productCount: 89, mlCategoryId: 'MLA1055' },
  { id: 'cat2', name: 'Hogar', productCount: 45, mlCategoryId: 'MLA1574' },
  { id: 'cat3', name: 'Accesorios', productCount: 22, mlCategoryId: 'MLA1039' },
];

export function getDashboardStats(): DashboardStats {
  const totalProducts = products.length;
  const activeListings = products.filter(p => p.mlStatus === 'active').length;
  const pausedListings = products.filter(p => p.mlStatus === 'paused').length;
  const errorListings = products.filter(p => p.mlStatus === 'error').length;
  const outOfStock = products.filter(p => p.stock === 0).length;
  const todaySyncs = syncLogs.filter(l => l.timestamp.startsWith('2026-03-18')).length;
  const estimatedRevenue = products.filter(p => p.mlStatus === 'active').reduce((sum, p) => sum + (p.sellingPrice * Math.min(p.stock, 10)), 0);
  const avgMargin = products.reduce((sum, p) => sum + p.margin, 0) / products.length;

  return {
    totalProducts,
    activeListings,
    pausedListings,
    errorListings,
    outOfStock,
    todaySyncs,
    lastSyncTime: '2026-03-18T14:30:00',
    estimatedRevenue,
    averageMargin: Math.round(avgMargin),
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
  }).format(amount);
}

export function formatDateTime(dateString: string): string {
  if (!dateString) return '-';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('es-AR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export function formatTime(dateString: string): string {
  if (!dateString) return '-';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('es-AR', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export function getStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    active: 'Activo',
    paused: 'Pausado',
    not_listed: 'Sin publicar',
    error: 'Error',
    success: 'Éxito',
    warning: 'Advertencia',
    running: 'En ejecución',
    completed: 'Completado',
    failed: 'Fallido',
    scheduled: 'Programado',
  };
  return labels[status] || status;
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    active: 'bg-green-100 text-green-700',
    paused: 'bg-yellow-100 text-yellow-700',
    not_listed: 'bg-gray-100 text-gray-700',
    error: 'bg-red-100 text-red-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    running: 'bg-blue-100 text-blue-700',
    completed: 'bg-green-100 text-green-700',
    failed: 'bg-red-100 text-red-700',
    scheduled: 'bg-purple-100 text-purple-700',
  };
  return colors[status] || 'bg-gray-100 text-gray-700';
}
