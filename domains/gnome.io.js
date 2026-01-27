D("gnome.io", REG_GANDI,
    DnsProvider(DNS_GANDI),
    DefaultTTL('1h'),
    MX("@", 10, "smtp.gnome.org."),
    ALIAS("@", "ingress.openshift.gnome.org."),
    CNAME("www", "ingress.openshift.gnome.org."),

    CNAME("mixpost", "ingress.openshift.gnome.org."),
    CNAME("wiki", "ingress.openshift.gnome.org."),
    END);
