D("gnome.io", REG_GANDI,
    DnsProvider(DNS_GANDI),
    DefaultTTL('1h'),
    MX("@", 10, "smtp.gnome.org."),
    ALIAS("@", "dualstack.n.sni.global.fastly.net."),
    CNAME("www", "dualstack.n.sni.global.fastly.net."),

    CNAME("listmonk", "ingress.openshift.gnome.org."),
    CNAME("mixpost", "ingress.openshift.gnome.org."),
    CNAME("webmail", "ingress.openshift.gnome.org."),
    CNAME("wiki", "ingress.openshift.gnome.org."),

    CNAME("_acme-challenge", "9et3k0dnpsm3evt7xw.fastly-validations.com."),
    CNAME("_acme-challenge.www", "xdj5x58c03d4sx4va7.fastly-validations.com."),
    END);
