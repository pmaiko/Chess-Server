import { Injectable, OnModuleDestroy } from '@nestjs/common';

@Injectable()
export class StorageService implements OnModuleDestroy {
  private storage = new Map<string, any>();

  set(key: string, value: any) {
    this.storage.set(key, value);
  }

  get<T>(key: string): T | undefined {
    return this.storage.get(key);
  }

  getAll() {
    return Object.fromEntries(this.storage);
  }

  delete(key: string) {
    this.storage.delete(key);
  }

  clear() {
    this.storage.clear();
  }

  onModuleDestroy() {
    this.clear();
  }
}
