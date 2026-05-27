D("flatpak.org", REG_GANDI,
    DnsProvider(DNS_GANDI),
    DefaultTTL('1h'),
    ALIAS("@", "www.flatpak.org."),

    MX("@", 10, "smtp.gnome.org."),
    CNAME("docs", "readthedocs.io."),
    CNAME("www", "dualstack.n.sni.global.fastly.net."),
    TXT("@", "libera-iE!2PbqoQsUaDXkRDrbAX2_j"),
    TXT("_github-challenge-flatpak-org", "917f6431b5"),
    CNAME("_acme-challenge", "u5x0gcvrephtn6h952.fastly-validations.com."),
    CNAME("_acme-challenge.www", "9gtmmm2futr04qa3q9.fastly-validations.com."),
    END);
