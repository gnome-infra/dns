D("gtk.org", REG_MONITOR,
    DnsProvider(DNS_CLOUDNS),
    A("@", "151.101.1.91"),
    A("@", "151.101.129.91"),
    A("@", "151.101.193.91"),
    A("@", "151.101.65.91"),
    AAAA("@", "2a04:4e42::347"),
    AAAA("@", "2a04:4e42:200::347"),
    AAAA("@", "2a04:4e42:400::347"),
    AAAA("@", "2a04:4e42:600::347"),
    MX("@", 10, "smtp.gnome.org."),
    CNAME("www", "ocp-ingress.fastly.gnome.org."),
    CNAME("ftp", "ocp-ingress.fastly.gnome.org."),
    CNAME("docs", "ocp-ingress.fastly.gnome.org."),
    CNAME("beast", "beast.testbit.eu."),
    CNAME("ftp.beast", "beast.gtk.org."),
    CNAME("www.beast", "beast.gtk.org."),
    CNAME("rapicorn", "rapicorn.testbit.eu."),
    CNAME("ftp.rapicorn", "rapicorn.gtk.org."),
    CNAME("www.rapicorn", "rapicorn.gtk.org."),
    CNAME("blog", "blogs.gnome.org."),
    CNAME("_acme-challenge", "m96ji2hmke0c6k3d5r.fastly-validations.com."),
    END);
