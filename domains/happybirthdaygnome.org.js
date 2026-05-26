D("happybirthdaygnome.org", REG_GANDI,
    DnsProvider(DNS_GANDI),
    DefaultTTL('1h'),
    MX("@", 10, "smtp.gnome.org."),
    ALIAS("@", "dualstack.n.sni.global.fastly.net."),
    CNAME("www", "dualstack.n.sni.global.fastly.net."),
    CNAME("_acme-challenge", "piruex9cj04jopz1k3.fastly-validations.com."),
    END);
