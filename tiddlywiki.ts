import { Package } from './nix.ts';


interface Instance {
  config: (options: Options) => Config;
  save(): void;
  restore(): void;
}


interface Options {
  name: string;

  domainName: string;
  backup: {
    backend: BackupBackend;
    password: string;
  };
}


interface Config {
  systemd: {
    tmpfiles_rules: string[];
    services: SystemdService[];
  };
  services: {
    nginx: {
      enable: boolean;
      config: string;
    };
    tiddlywiki: {
      enable: boolean;
      package: Package;
      dataDir: string;
      listenOptions: {
        port: number;
        readers: string;
        writers: string;
        credentials?: string;
      };
    };
  };
  restic_backups: {
    [key]: {
      initialize: boolean;
      paths: string[];
      repository: string;
      passwordFile: string;
      environmentFile: string;
      timerConfig: {
        onCalendar: string;
        accuracySec: number;
      };
      pruneOpts: string[];
    };
  };
}


interface SystemdService {
  name: string;
  description: string;
  after: string[];
  requires: string[];
  wantedBy: string[];
  service: {
    type: string;
    user: string;
    group: string;
    environment: string[];
    execStartPre: string[];
    execStart: string;
  };


interface Service {
  enable: boolean;

  package: Package;
  dataDir?: string;

  listenOptions: {
    port: number;
    readers: string;
    writers: string;
    credentials?: string;
  };


  config: (options: Options) => Config;

}


interface BackupBackend {
  url: string;
  credentials: string;
}
