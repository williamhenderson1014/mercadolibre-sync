export interface Product {
  id: string;
  sku: string;
  name: string;
  normalizedTitle: string;
  description: string;
  brand: string;
  category: string;
  supplierPrice: number;
  sellingPrice: number;
  margin: number;
  stock: number;
  images: string[];
  supplierUrl: string;
  mlListingId?: string;
  mlStatus: 'not_listed' | 'active' | 'paused' | 'error';
  lastSync: string;
  createdAt: string;
}

export interface PriceHistory {
  id: string;
  productId: string;
  supplierPrice: number;
  sellingPrice: number;
  timestamp: string;
}

export interface StockHistory {
  id: string;
  productId: string;
  stock: number;
  timestamp: string;
}

export interface SyncLog {
  id: string;
  type: 'scrape' | 'sync' | 'publish' | 'update' | 'pause' | 'error';
  status: 'success' | 'warning' | 'error';
  message: string;
  details?: string;
  productId?: string;
  productName?: string;
  timestamp: string;
}

export interface SyncJob {
  id: string;
  name: string;
  type: 'full_sync' | 'price_sync' | 'stock_sync' | 'scrape';
  status: 'running' | 'completed' | 'failed' | 'scheduled';
  progress: number;
  totalProducts: number;
  processedProducts: number;
  startedAt: string;
  completedAt?: string;
  nextRun?: string;
}

export interface MarginConfig {
  id: string;
  category: string;
  marginPercent: number;
  minMargin: number;
  maxMargin: number;
  isActive: boolean;
}

export interface SupplierConfig {
  id: string;
  name: string;
  url: string;
  isActive: boolean;
  lastScrape: string;
  totalProducts: number;
  syncInterval: number; // minutes
}

export interface DashboardStats {
  totalProducts: number;
  activeListings: number;
  pausedListings: number;
  errorListings: number;
  outOfStock: number;
  todaySyncs: number;
  lastSyncTime: string;
  estimatedRevenue: number;
  averageMargin: number;
}

export interface Category {
  id: string;
  name: string;
  productCount: number;
  mlCategoryId: string;
}
