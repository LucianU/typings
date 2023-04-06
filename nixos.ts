const nixOSConfig: NixOSConfiguration = {
  // Your NixOS configuration options here
};


interface NixOSConfiguration {
  nixpkgs?: {
    config?: {
      allowUnfree?: boolean;
    };
    pkgs?: any[];
    overlays?: any[];

    crossSystem?: any;
    localSystem?: any;

    hostPlatform?: any;
    buildPlatform?: any;
  };

  boot?: {
    loader?: {
      grub?: {
        device?: string;
        enable?: boolean;
      };
      systemdBoot?: {
        enable?: boolean;
      };
    };
    kernelPackages?: string;
    kernelParams?: string[];
  };

  networking?: {
    hostName?: string;
    interfaces?: Record<string, Interface>;
    firewall?: {
      allowedTCPPorts?: number[];
      allowedUDPPorts?: number[];
      enable?: boolean;
    };
  };

  services?: {
    openssh?: {
      enable?: boolean;
    };
    nginx?: {
      enable?: boolean;
      recommendedGzipSettings?: boolean;
      recommendedOptimisation?: boolean;
      recommendedProxySettings?: boolean;
      recommendedTlsSettings?: boolean;
    };
  };

  users?: {
    users?: Record<string, User>;
    groups?: Record<string, Group>;
  };

  environment?: Environment;

  hardware?: {
    bluetooth?: {
      enable?: boolean;
    };
    cpu?: {
      intel?: {
        updateMicrocode?: boolean;
      };
      amd?: {
        updateMicrocode?: boolean;
      };
    };
    videoDrivers?: string[];
    pulseaudio?: {
      enable?: boolean;
      package?: string;
      extraModules?: string[];
    };
  };

  fileSystems?: Record<string, FileSystem>;

  swapDevices?: { device: string; priority?: number; options?: string[] }[];

  security?: {
    apparmor?: {
      enable?: boolean;
    };
    selinux?: {
      enable?: boolean;
      type?: string;
    };
    wrapperDirs?: string[];
  };

  virtualisation?: {
    docker?: {
      enable?: boolean;
    };
    libvirtd?: {
      enable?: boolean;
    };
    virtualbox?: {
      host?: {
        enable?: boolean;
        enableExtensionPack?: boolean;
      };
      guest?: {
        enable?: boolean;
        enableGuestAdditions?: boolean;
      };
    };
    qemu?: {
      package?: string;
    };
  };

  time?: {
    timeZone?: string;
  };
}

type User = {
    name: string;
    isNormalUser?: boolean;
    home?: string;
    description?: string;
    extraGroups?: string[];
    openssh?: { authorizedKeys?: { keys?: string[] } };
};


type Group = {
    name: string;
    gid?: number;
};


type Interface = {
    ipv4?: string;
    ipv6?: string;
};


type FileSystem = {
    device: string;
    fsType?: string;
    options?: string[];
};


type Environment = {
    variables?: Record<string, string>;
    sessionVariables?: Record<string, string>;

    homeBinInPath?: boolean;
    localBinInPath?: boolean;

    systemPackages?: string[];
    defaultPackages?: string[];

    shells?: string[];
    shellAliases?: Record<string, string>;
    shellInit?: string;
    loginShellInit?: string;
    interactiveShellInit?: string;

    profiles?: string[];
    profileRelativeSessionVariables?: Record<string, string>;
    profileRelativeEnvVars?: Record<string, string>;

    etc?: Record<string, Etc>;
    pathsToLink?: string[];
};


type Etc = {
    user: string;
    uid?: number;
    group: string;
    gid?: number;
    mode: string;
    text?: string;
    source: string;
    target: string;
    enable?: boolean;
};


type Virtualisation = {
    efi?: any;
    efiVars?: string; // a FilePath actually
    emptyDiskImages?: number[];
    fileSystems?: Record<string, any>;
    forwardPorts?: any[];
    graphics?: boolean;
    memorySize?: number;
    mSize?: number;
    resolution?: Record<string, number>;
    sharedDirectories?: Record<string, any>;
    useBootLoader?: boolean;
    useEFIBoot?: boolean;
    useDefaultFileSystems?: boolean;
    useNixStoreImage?: boolean;
    vlans?: number[];
    host?: {
        pkgs?: any;
    };
    writeableStore?: boolean;
    writeableStoreUseTmpfs?: boolean;

    docker?: any;
    hypervGuest?: any;
    kvmgt?: any;
    libvirtd?: Libvirtd;
    lxc?: any;
    lxd?: any;
    oci-containers?: any;
    podman?: any;
    qemu?: any;
    virtualbox?: any;
    vmware?: any;
    vswitch?: any;
    waydroid?: any;
    xen?: any;
};


type Libvirtd = {
    enable?: boolean;
    package?: string;
    qemu?: any;
    network?: {
        enable?: boolean;
        bridge?: string;
    };
    storage?: {
        enable?: boolean;
        pool?: {
            name?: string;
            path?: string;
            type?: string;
        };
    };
};

