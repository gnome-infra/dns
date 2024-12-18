D("gtk.org", REG_MONITOR,
    DnsProvider(DNS_CLOUDNS),
    DefaultTTL('1h'),
    ALIAS("@", "ingress.openshift.gnome.org."),
    MX("@", 10, "smtp.gnome.org."),
    CNAME("www", "ingress.openshift.gnome.org."),
    CNAME("ftp", "ingress.openshift.gnome.org."),
    CNAME("docs", "ingress.openshift.gnome.org."),
    CNAME("beast", "beast.testbit.eu."),
    CNAME("ftp.beast", "beast.gtk.org."),
    CNAME("www.beast", "beast.gtk.org."),
    CNAME("rapicorn", "rapicorn.testbit.eu."),
    CNAME("ftp.rapicorn", "rapicorn.gtk.org."),
    CNAME("www.rapicorn", "rapicorn.gtk.org."),
    CNAME("blog", "blogs.gnome.org."),
    END);
