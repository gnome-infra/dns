D("happybirthdaygnome.org", REG_GANDI,
    DnsProvider(DNS_GANDI),
    DefaultTTL('1h'),
    MX("@", 10, "smtp.gnome.org."),
    ALIAS("@", "ingress.openshift.gnome.org."),
    CNAME("www", "ingress.openshift.gnome.org."),
    END);
