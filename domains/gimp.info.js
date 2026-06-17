D("gimp.info", REG_GANDI,
    DnsProvider(DNS_GANDI),
    DefaultTTL('1h'),
    MX("@", 10, "smtp.gnome.org."),
    ALIAS("@", "dualstack.n.sni.global.fastly.net."),
    CNAME("www", "dualstack.n.sni.global.fastly.net."),

    CNAME("_acme-challenge", "n0icv2q6yd0kc8sjok.fastly-validations.com."),
    CNAME("_acme-challenge.www", "zflgokse0nemuguxzr.fastly-validations.com."),
    END);
