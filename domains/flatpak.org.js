D("flatpak.org", REG_GANDI,
    DnsProvider(DNS_GANDI),
    DefaultTTL('1h'),
    ALIAS("@", "www.flatpak.org."),

    MX("@", 10, "smtp.gnome.org."),
    CNAME("docs", "readthedocs.io."),
    CNAME("www", "ingress.openshift.gnome.org."),
    TXT("@", "libera-iE!2PbqoQsUaDXkRDrbAX2_j"),
    TXT("_github-challenge-flatpak-org", "917f6431b5"),
    END);
