D("flatpak.org", REG_GANDI,
    DnsProvider(DNS_GANDI),
    A("@", "3.208.234.181"),
    A("@", "54.210.188.246"),
    A("@", "8.43.85.5"),
    MX("@", 10, "smtp.gnome.org."),
    CNAME("docs", "readthedocs.io."),
    CNAME("www", "ingress.openshift.gnome.org."),
    TXT("@", "libera-iE!2PbqoQsUaDXkRDrbAX2_j"),
    TXT("_github-challenge-flatpak-org", "917f6431b5"),
    END);
