import { Package } from './nix.ts';


interface TiddlywikiInstance {
  name: string;
  services: {
    tiddlywiki: TiddlywikiService;
    restic: ResticService;
    nginx: NginxService;
  };
}


interface TiddlywikiService {
  enable: boolean;
  package: Package;
  port?: number;
  dataDir?: string;
  domainName: string;

  backup: {
    backend: BackupBackend;
    password: string;
    path: string;
  };

  listenOptions: {
    port: number;
    readers: string;
    writers: string;
    credentials?: string;
  };
}


interface BackupBackend {
  url: string;
  credentials: string;
}
