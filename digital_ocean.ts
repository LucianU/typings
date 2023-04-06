export function mkDroplet(droplet: Droplet): string {
  return JSON.stringify({
    resource: {
      digitalocean_droplet: {
        [droplet.name]: {
          name: droplet.name,
          region: droplet.region,
          size: droplet.size,
          image: droplet.image,
          ssh_keys: droplet.ssh_keys,
          backups: droplet.backups,
          ipv6: droplet.ipv6,
          private_networking: droplet.private_networking,
          user_data: droplet.user_data,
          tags: droplet.tags,
        }
      }
    }
  });
}


export interface Droplet {
  name: string;
  size: string;
  image: Image;
  region: Region;
  ssh_keys?: string[];
  backups?: boolean;
  monitoring?: boolean;
  ipv6?: boolean;
  vpc_uuid?: string;
  private_networking?: boolean;
  resize_disk?: boolean;
  tags?: string[];
  user_data?: string;
  volume_ids?: string[];
  droplet_agent?: boolean;
  graceful_shutdown?: boolean;
}


export enum Image {
  ALMALINUX_8 = "almalinux-8-x64",
  ALMALINUX_9 = "almalinux-9-x64",
  CENTOS_7 = "centos-7-x64",
  CENTOS_STREAM_8 = "centos-stream-8-x64",
  CENTOS_STREAM_9 = "centos-stream-9-x64",
  DEBIAN_11 = "debian-11-x64",
  DEBIAN_10 = "debian-10-x64",
  FEDORA_36 = "fedora-36-x64",
  FEDORA_37 = "fedora-37-x64",
  ROCKYLINUX_8_4 = "rockylinux-8-4-x64",
  ROCKYLINUX_8 = "rockylinux-8-x64",
  ROCKYLINUX_8_5 = "rockylinux-8-5-x64",
  ROCKYLINUX_9 = "rockylinux-9-x64",
  UBUNTU_18_04 = "ubuntu-18-04-x64",
  UBUNTU_20_04 = "ubuntu-20-04-x64",
  UBUNTU_22_04 = "ubuntu-22-04-x64",
  UBUNTU_22_10 = "ubuntu-22-10-x64",
}

export enum Region {
  NYC1 = 'nyc1',
  NYC2 = 'nyc2',
  NYC3 = 'nyc3',
  AMS2 = 'ams2',
  AMS3 = 'ams3',
  SFO1 = 'sfo1',
  SFO2 = 'sfo2',
  SFO3 = 'sfo3',
  TOR1 = 'tor1',
  FRA1 = 'fra1',
  LON1 = 'lon1',
  BLR1 = 'blr1',
  SGP1 = 'sgp1',
  SYD1 = 'syd1',
}
