D("pygtk.org", REG_GANDI,
    DnsProvider(DNS_GANDI),
    MX("@", 10, "www.async.com.br."),
    A("@", "8.43.85.3"),
    A("@", "8.43.85.4"),
    A("@", "8.43.85.5"),
    CNAME("www", "router-default.apps.openshift4.gnome.org."),
    CNAME("irc", "irc.gnome.org."),
    END);
