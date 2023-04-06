interface HetznerServer {
    name: string;
    server_type: string;
    image: string;
    location?: string;
    datacenter?: string;
    user_data?: string;
    ssh_keys?: string[];
    public_net?: PublicNet;
    keep_disk?: boolean;
    iso?: string;
    rescue?: boolean;
    labels?: Record<string, string>;
    backups: boolean;
    firewall_ids?: string[];
    ignore_remote_firewall_ids?: boolean;
    network?: Network;
    placement_group_id?: string;
    delete_protection?: boolean;
    rebuild_protection?: boolean;
    allow_deprecated_images?: boolean;
}

type PublicNet = {
    ipv4_enabled: boolean;
    ipv6_enabled: boolean;
    ipv4?: string;
}

type Network = {
    network_id: string;
    ip: string;
    alias_ips: string[];
    mac_address: string;
};

