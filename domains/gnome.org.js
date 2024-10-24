D("gnome.org", REG_GANDI,
    DnsProvider(DNS_CLOUDNS),

    MX("@", 10, "smtp.gnome.org."),
    A("@", "151.101.1.91"),
    A("@", "151.101.129.91"),
    A("@", "151.101.193.91"),
    A("@", "151.101.65.91"),
    AAAA("@", "2a04:4e42::347"),
    AAAA("@", "2a04:4e42:200::347"),
    AAAA("@", "2a04:4e42:400::347"),
    AAAA("@", "2a04:4e42:600::347"),

    // Verification(s)
    TXT("@", "google-site-verification=CERH6P8oe_jgCNAsVY7ZnHJba1Csf2hHJ779kJPtXKA"),
    TXT("@", "MS=ms80787754"),

    A("ns-master", "8.43.85.21"),
    AAAA("ns-master", "2620:52:3:1:5054:ff:fec7:bbd0"),
    A("ns-slave", "8.43.85.6"),
    AAAA("ns-slave", "2620:52:3:1:5054:ff:fe90:282b"),
    CNAME("ns2", "ns-slave.gnome.org."),

    // Delegation(s)
    NS("openshift", "ns-527.awsdns-01.net."),
    NS("openshift", "ns-444.awsdns-55.com."),
    NS("openshift", "ns-1565.awsdns-03.co.uk."),
    NS("openshift", "ns-1149.awsdns-15.org."),

    // SPF
    TXT("@", "v=spf1 a:smtp.gnome.org -all"),
    TXT("smtp", "v=spf1 a:smtp.gnome.org -all"),
    TXT("ceph01", "v=spf1 a:smtp.gnome.org -all"),
    TXT("ceph02", "v=spf1 a:smtp.gnome.org -all"),
    TXT("ceph03", "v=spf1 a:smtp.gnome.org -all"),
    TXT("bastion01", "v=spf1 a:smtp.gnome.org -all"),
    TXT("bastion02", "v=spf1 a:smtp.gnome.org -all"),
    TXT("nsd01", "v=spf1 a:smtp.gnome.org -all"),
    TXT("nsd02", "v=spf1 a:smtp.gnome.org -all"),
    TXT("idm01", "v=spf1 a:smtp.gnome.org -all"),
    TXT("idm02", "v=spf1 a:smtp.gnome.org -all"),
    TXT("idm03", "v=spf1 a:smtp.gnome.org -all"),
    TXT("idm04", "v=spf1 a:smtp.gnome.org -all"),
    TXT("master", "v=spf1 a:smtp.gnome.org -all"),
    TXT("logs", "v=spf1 a:smtp.gnome.org -all"),
    TXT("splunk01", "v=spf1 a:smtp.gnome.org -all"),
    TXT("gitlab-git-svcs", "v=spf1 a:smtp.gnome.org -all"),
    TXT("router-default.apps.openshift4", "v=spf1 a:smtp.gnome.org -all"),
    TXT("ocp-ingress.fastly", "v=spf1 a:smtp.gnome.org -all"),

    // DKIM & DMARC
    TXT("default._domainkey", "v=DKIM1; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDTA1zgW8+e7haZgEoZAMmoMC7jwekFKv6AV7OQbsOKLpAnLivyVUbFe5Rg9MwIRDL2D5fBaItjDojgpZJlr8lPLEcB8R5eGj7rKSUAgd0ufSoV+rmYbQGu0+A3Kuz/ynJCmw86K3UrjqMW/YHGAv4Jg/+Dx2e0cUKbJu43fvgZ6QIDAQAB"),
    TXT("default._domainkey.ceph-metrics", "v=DKIM1; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDTA1zgW8+e7haZgEoZAMmoMC7jwekFKv6AV7OQbsOKLpAnLivyVUbFe5Rg9MwIRDL2D5fBaItjDojgpZJlr8lPLEcB8R5eGj7rKSUAgd0ufSoV+rmYbQGu0+A3Kuz/ynJCmw86K3UrjqMW/YHGAv4Jg/+Dx2e0cUKbJu43fvgZ6QIDAQAB"),
    TXT("default._domainkey.ceph01", "v=DKIM1; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDTA1zgW8+e7haZgEoZAMmoMC7jwekFKv6AV7OQbsOKLpAnLivyVUbFe5Rg9MwIRDL2D5fBaItjDojgpZJlr8lPLEcB8R5eGj7rKSUAgd0ufSoV+rmYbQGu0+A3Kuz/ynJCmw86K3UrjqMW/YHGAv4Jg/+Dx2e0cUKbJu43fvgZ6QIDAQAB"),
    TXT("default._domainkey.ceph02", "v=DKIM1; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDTA1zgW8+e7haZgEoZAMmoMC7jwekFKv6AV7OQbsOKLpAnLivyVUbFe5Rg9MwIRDL2D5fBaItjDojgpZJlr8lPLEcB8R5eGj7rKSUAgd0ufSoV+rmYbQGu0+A3Kuz/ynJCmw86K3UrjqMW/YHGAv4Jg/+Dx2e0cUKbJu43fvgZ6QIDAQAB"),
    TXT("default._domainkey.ceph03", "v=DKIM1; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDTA1zgW8+e7haZgEoZAMmoMC7jwekFKv6AV7OQbsOKLpAnLivyVUbFe5Rg9MwIRDL2D5fBaItjDojgpZJlr8lPLEcB8R5eGj7rKSUAgd0ufSoV+rmYbQGu0+A3Kuz/ynJCmw86K3UrjqMW/YHGAv4Jg/+Dx2e0cUKbJu43fvgZ6QIDAQAB"),
    TXT("default._domainkey.bastion01", "v=DKIM1; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDTA1zgW8+e7haZgEoZAMmoMC7jwekFKv6AV7OQbsOKLpAnLivyVUbFe5Rg9MwIRDL2D5fBaItjDojgpZJlr8lPLEcB8R5eGj7rKSUAgd0ufSoV+rmYbQGu0+A3Kuz/ynJCmw86K3UrjqMW/YHGAv4Jg/+Dx2e0cUKbJu43fvgZ6QIDAQAB"),
    TXT("default._domainkey.bastion02", "v=DKIM1; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDTA1zgW8+e7haZgEoZAMmoMC7jwekFKv6AV7OQbsOKLpAnLivyVUbFe5Rg9MwIRDL2D5fBaItjDojgpZJlr8lPLEcB8R5eGj7rKSUAgd0ufSoV+rmYbQGu0+A3Kuz/ynJCmw86K3UrjqMW/YHGAv4Jg/+Dx2e0cUKbJu43fvgZ6QIDAQAB"),
    TXT("default._domainkey.nsd01", "v=DKIM1; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDTA1zgW8+e7haZgEoZAMmoMC7jwekFKv6AV7OQbsOKLpAnLivyVUbFe5Rg9MwIRDL2D5fBaItjDojgpZJlr8lPLEcB8R5eGj7rKSUAgd0ufSoV+rmYbQGu0+A3Kuz/ynJCmw86K3UrjqMW/YHGAv4Jg/+Dx2e0cUKbJu43fvgZ6QIDAQAB"),
    TXT("default._domainkey.nsd02", "v=DKIM1; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDTA1zgW8+e7haZgEoZAMmoMC7jwekFKv6AV7OQbsOKLpAnLivyVUbFe5Rg9MwIRDL2D5fBaItjDojgpZJlr8lPLEcB8R5eGj7rKSUAgd0ufSoV+rmYbQGu0+A3Kuz/ynJCmw86K3UrjqMW/YHGAv4Jg/+Dx2e0cUKbJu43fvgZ6QIDAQAB"),
    TXT("default._domainkey.idm01", "v=DKIM1; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDTA1zgW8+e7haZgEoZAMmoMC7jwekFKv6AV7OQbsOKLpAnLivyVUbFe5Rg9MwIRDL2D5fBaItjDojgpZJlr8lPLEcB8R5eGj7rKSUAgd0ufSoV+rmYbQGu0+A3Kuz/ynJCmw86K3UrjqMW/YHGAv4Jg/+Dx2e0cUKbJu43fvgZ6QIDAQAB"),
    TXT("default._domainkey.idm02", "v=DKIM1; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDTA1zgW8+e7haZgEoZAMmoMC7jwekFKv6AV7OQbsOKLpAnLivyVUbFe5Rg9MwIRDL2D5fBaItjDojgpZJlr8lPLEcB8R5eGj7rKSUAgd0ufSoV+rmYbQGu0+A3Kuz/ynJCmw86K3UrjqMW/YHGAv4Jg/+Dx2e0cUKbJu43fvgZ6QIDAQAB"),
    TXT("default._domainkey.idm03", "v=DKIM1; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDTA1zgW8+e7haZgEoZAMmoMC7jwekFKv6AV7OQbsOKLpAnLivyVUbFe5Rg9MwIRDL2D5fBaItjDojgpZJlr8lPLEcB8R5eGj7rKSUAgd0ufSoV+rmYbQGu0+A3Kuz/ynJCmw86K3UrjqMW/YHGAv4Jg/+Dx2e0cUKbJu43fvgZ6QIDAQAB"),
    TXT("default._domainkey.idm04", "v=DKIM1; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDTA1zgW8+e7haZgEoZAMmoMC7jwekFKv6AV7OQbsOKLpAnLivyVUbFe5Rg9MwIRDL2D5fBaItjDojgpZJlr8lPLEcB8R5eGj7rKSUAgd0ufSoV+rmYbQGu0+A3Kuz/ynJCmw86K3UrjqMW/YHGAv4Jg/+Dx2e0cUKbJu43fvgZ6QIDAQAB"),
    TXT("default._domainkey.master", "v=DKIM1; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDTA1zgW8+e7haZgEoZAMmoMC7jwekFKv6AV7OQbsOKLpAnLivyVUbFe5Rg9MwIRDL2D5fBaItjDojgpZJlr8lPLEcB8R5eGj7rKSUAgd0ufSoV+rmYbQGu0+A3Kuz/ynJCmw86K3UrjqMW/YHGAv4Jg/+Dx2e0cUKbJu43fvgZ6QIDAQAB"),
    TXT("default._domainkey.logs", "v=DKIM1; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDTA1zgW8+e7haZgEoZAMmoMC7jwekFKv6AV7OQbsOKLpAnLivyVUbFe5Rg9MwIRDL2D5fBaItjDojgpZJlr8lPLEcB8R5eGj7rKSUAgd0ufSoV+rmYbQGu0+A3Kuz/ynJCmw86K3UrjqMW/YHGAv4Jg/+Dx2e0cUKbJu43fvgZ6QIDAQAB"),
    TXT("default._domainkey.splunk01", "v=DKIM1; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDTA1zgW8+e7haZgEoZAMmoMC7jwekFKv6AV7OQbsOKLpAnLivyVUbFe5Rg9MwIRDL2D5fBaItjDojgpZJlr8lPLEcB8R5eGj7rKSUAgd0ufSoV+rmYbQGu0+A3Kuz/ynJCmw86K3UrjqMW/YHGAv4Jg/+Dx2e0cUKbJu43fvgZ6QIDAQAB"),
    TXT("default._domainkey.gitlab-git-svcs", "v=DKIM1; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDTA1zgW8+e7haZgEoZAMmoMC7jwekFKv6AV7OQbsOKLpAnLivyVUbFe5Rg9MwIRDL2D5fBaItjDojgpZJlr8lPLEcB8R5eGj7rKSUAgd0ufSoV+rmYbQGu0+A3Kuz/ynJCmw86K3UrjqMW/YHGAv4Jg/+Dx2e0cUKbJu43fvgZ6QIDAQAB"),
    TXT("default._domainkey.src", "v=DKIM1; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDTA1zgW8+e7haZgEoZAMmoMC7jwekFKv6AV7OQbsOKLpAnLivyVUbFe5Rg9MwIRDL2D5fBaItjDojgpZJlr8lPLEcB8R5eGj7rKSUAgd0ufSoV+rmYbQGu0+A3Kuz/ynJCmw86K3UrjqMW/YHGAv4Jg/+Dx2e0cUKbJu43fvgZ6QIDAQAB"),
    TXT("_dmarc", "v=DMARC1; p=reject; adkim=s; aspf=s;"),

    // Virtual machines (RDU2)
    A("smtp", "8.43.85.24"),
    AAAA("smtp", "2620:52:3:1:5054:ff:fef4:6212"),

    // FreeIPA
    A("idm01", "8.43.85.8"),
    A("idm02", "8.43.85.9"),
    CNAME("idm", "IDM-1201390071.us-east-1.elb.amazonaws.com."),

    CNAME("_7b45e79a96a58d6c8d893a6c8144d2ce.idm", "_cf5f5afa9f01c2f76592fa301f7bde13.djqtsrsxkq.acm-validations.aws."),

    // OpenShift 4
    A("master1.openshift4", "8.43.85.3"),
    A("master2.openshift4", "8.43.85.4"),
    A("master3.openshift4", "8.43.85.5"),
    CNAME("api-lb.openshift4", "ocp-ingress.fastly.gnome.org."),
    A("api.openshift4", "8.43.85.3"),
    A("api.openshift4", "8.43.85.4"),
    A("api.openshift4", "8.43.85.5"),
    A("apps.openshift4", "8.43.85.3"),
    A("apps.openshift4", "8.43.85.4"),
    A("apps.openshift4", "8.43.85.5"),
    A("*.apps.openshift4", "8.43.85.3"),
    A("*.apps.openshift4", "8.43.85.4"),
    A("*.apps.openshift4", "8.43.85.5"),
    A("router-default.apps.openshift4", "8.43.85.3"),
    A("router-default.apps.openshift4", "8.43.85.4"),
    A("router-default.apps.openshift4", "8.43.85.5"),

    // Services deployed to OpenShift
    CNAME("account", "ocp-ingress.fastly.gnome.org."),
    CNAME("auth1", "ocp-ingress.fastly.gnome.org."),
    CNAME("chat", "ocp-ingress.fastly.gnome.org."),
    CNAME("cloud", "router-default.apps.openshift4.gnome.org."),
    CNAME("download", "ocp-ingress.fastly.gnome.org."),
    CNAME("events", "ocp-ingress.fastly.gnome.org."),
    CNAME("extensions", "ocp-ingress.fastly.gnome.org."),
    CNAME("extensions-next", "ocp-ingress.fastly.gnome.org."),
    CNAME("foundation", "ocp-ingress.fastly.gnome.org."),
    CNAME("help", "ocp-ingress.fastly.gnome.org."),
    CNAME("l10n", "router-default.apps.openshift4.gnome.org."),
    CNAME("listmonk", "ocp-ingress.fastly.gnome.org."),
    CNAME("mutter", "ocp-ingress.fastly.gnome.org."),
    CNAME("nmcheck", "ocp-ingress.fastly.gnome.org."),
    CNAME("odrs", "1527653184.rsc.cdn77.org."),
    CNAME("os", "ocp-ingress.fastly.gnome.org."),
    CNAME("password", "ocp-ingress.fastly.gnome.org."),
    CNAME("planet", "ocp-ingress.fastly.gnome.org."),
    CNAME("planeta.br", "ocp-ingress.fastly.gnome.org."),
    CNAME("splunk", "ocp-ingress.fastly.gnome.org."),
    CNAME("surveys", "ocp-ingress.fastly.gnome.org."),
    CNAME("tileserver", "ocp-ingress.fastly.gnome.org."),
    CNAME("view", "ocp-ingress.fastly.gnome.org."),
    CNAME("vote", "ocp-ingress.fastly.gnome.org."),
    CNAME("webmail", "ocp-ingress.fastly.gnome.org."),
    CNAME("www", "ocp-ingress.fastly.gnome.org."),

    // OpenShift @ AWS
    CNAME("blogs", "ingress.openshift.gnome.org."),
    CNAME("bugzilla", "ingress.openshift.gnome.org."),
    CNAME("conduct", "ingress.openshift.gnome.org."),
    CNAME("discourse", "ingress.openshift.gnome.org."),
    CNAME("meet", "ingress.openshift.gnome.org."),
    CNAME("nominatim", "ingress.openshift.gnome.org."),
    CNAME("pad", "ingress.openshift.gnome.org."),
    CNAME("paste", "ingress.openshift.gnome.org."),
    CNAME("register.gitlab", "ingress.openshift.gnome.org."),
    CNAME("security", "ingress.openshift.gnome.org."),
    CNAME("shop", "ingress.openshift.gnome.org."),
    CNAME("sso", "ingress.openshift.gnome.org."),
    CNAME("webstats", "ingress.openshift.gnome.org."),
    CNAME("wiki", "1876207943.rsc.cdn77.org."),

    // Redirects
    CNAME("api", "ocp-ingress.fastly.gnome.org."),
    CNAME("art", "ocp-ingress.fastly.gnome.org."),
    CNAME("bugs", "ocp-ingress.fastly.gnome.org."),
    CNAME("build", "ocp-ingress.fastly.gnome.org."),
    CNAME("developer", "ocp-ingress.fastly.gnome.org."),
    CNAME("ftp", "ocp-ingress.fastly.gnome.org."),
    CNAME("gis", "ocp-ingress.fastly.gnome.org."),
    CNAME("git", "ocp-ingress.fastly.gnome.org."),
    CNAME("hedgedoc", "ocp-ingress.fastly.gnome.org."),
    CNAME("i18n", "ocp-ingress.fastly.gnome.org."),
    CNAME("infrastructure", "ocp-ingress.fastly.gnome.org."),
    CNAME("las", "ocp-ingress.fastly.gnome.org."),
    CNAME("library", "ocp-ingress.fastly.gnome.org."),
    CNAME("live", "ocp-ingress.fastly.gnome.org."),
    CNAME("mango", "ocp-ingress.fastly.gnome.org."),
    CNAME("news", "ocp-ingress.fastly.gnome.org."),
    CNAME("nl", "ocp-ingress.fastly.gnome.org."),
    CNAME("opw", "ocp-ingress.fastly.gnome.org."),
    CNAME("outreachy", "ocp-ingress.fastly.gnome.org."),
    CNAME("pango", "ocp-ingress.fastly.gnome.org."),
    CNAME("people", "ocp-ingress.fastly.gnome.org."),
    CNAME("projects", "ocp-ingress.fastly.gnome.org."),
    CNAME("projects-old", "ocp-ingress.fastly.gnome.org."),
    CNAME("src", "ocp-ingress.fastly.gnome.org."),
    CNAME("torrent", "ocp-ingress.fastly.gnome.org."),
    CNAME("torrents", "ocp-ingress.fastly.gnome.org."),

    // Custom domains for GitLab Pages
    CNAME("apps", "ocp-ingress.fastly.gnome.org."),
    CNAME("br", "ocp-ingress.fastly.gnome.org."),
    CNAME("brand", "ocp-ingress.fastly.gnome.org."),
    CNAME("cantarell", "ocp-ingress.fastly.gnome.org."),
    CNAME("circle", "ocp-ingress.fastly.gnome.org."),
    CNAME("forty", "ocp-ingress.fastly.gnome.org."),
    CNAME("gjs-docs", "ocp-ingress.fastly.gnome.org."),
    CNAME("glade", "ocp-ingress.fastly.gnome.org."),
    CNAME("gsoc", "ocp-ingress.fastly.gnome.org."),
    CNAME("handbook", "ocp-ingress.fastly.gnome.org."),
    CNAME("orca", "ocp-ingress.fastly.gnome.org."),
    CNAME("nepal", "ocp-ingress.fastly.gnome.org."),
    CNAME("pygobject", "ocp-ingress.fastly.gnome.org."),
    CNAME("release", "ocp-ingress.fastly.gnome.org."),
    CNAME("thisweek", "ocp-ingress.fastly.gnome.org."),
    CNAME("tools.design", "ocp-ingress.fastly.gnome.org."),
    CNAME("tracker", "ocp-ingress.fastly.gnome.org."),
    CNAME("tracker.api", "ocp-ingress.fastly.gnome.org."),
    CNAME("welcome", "ocp-ingress.fastly.gnome.org."),

    // Sysadmin turf
    A("bastion", "8.43.85.20"),
    A("bastion01", "8.43.85.20"),
    A("bastion02", "98.83.131.224"),
    A("vpn", "8.43.85.20"),
    CNAME("smtp-int", "smtp.gnome.org."),
    CNAME("grafana", "ocp-ingress.fastly.gnome.org."),

    // Fastly
    A("ocp-ingress.fastly", "151.101.1.91"),
    A("ocp-ingress.fastly", "151.101.129.91"),
    A("ocp-ingress.fastly", "151.101.193.91"),
    A("ocp-ingress.fastly", "151.101.65.91"),
    AAAA("ocp-ingress.fastly", "2a04:4e42::347"),
    AAAA("ocp-ingress.fastly", "2a04:4e42:200::347"),
    AAAA("ocp-ingress.fastly", "2a04:4e42:400::347"),
    AAAA("ocp-ingress.fastly", "2a04:4e42:600::347"),

    // Mail
    CNAME("mail", "1222440682.rsc.cdn77.org."),
    CNAME("lists", "1222440682.rsc.cdn77.org."),
    CNAME("staff-mail", "smtp.gnome.org."),
    SRV("_imaps._tcp.staff-mail", 0, 1, 993, "staff-mail.gnome.org."),
    SRV("_submission._tcp.staff-mail", 0, 1, 587, "staff-mail.gnome.org."),
    SRV("_matrix._tcp", 10, 5, 443, "gnome.modular.im."),

    // MX records
    MX("cvs", 10, "smtp.gnome.org."),
    MX("svn", 10, "smtp.gnome.org."),
    MX("router-default.apps.openshift4", 10, "smtp.gnome.org."),
    MX("ocp-ingress.fastly", 10, "smtp.gnome.org."),

    // SSHFP entries
    SSHFP("master", 1, 1, "04a581f274785ddb28b97686ddc17265a131cc1e"),
    SSHFP("master", 1, 2, "0abe16b85a3ec5530b363921c7e1a0a1a42fb0910a46f4a73711ee27fcb5ea7b"),
    SSHFP("master", 3, 1, "e63b06f28f137c843e94fff5755facff5c94c09b"),
    SSHFP("master", 3, 2, "825c3b7c7628112f1b0532486ba479d4986347e1aeaa50455edf84ece2216db4"),
    SSHFP("master", 4, 1, "d416429f976a151fc71748e75e33d316bb0afe56"),
    SSHFP("master", 4, 2, "b8b2d4e271a941e0cfa8b336f1e1bb74c899cb645e0ca93e2f16ccf4218d4d0e"),
    SSHFP("bastion", 1, 1, "5137d54ef783e72caa154f5e987446ccdb1d98f6"),
    SSHFP("bastion", 1, 2, "5340a918e8a7bfd284741214f8650ce44521a034d996acd3b969651e80588a0f"),
    SSHFP("bastion", 3, 1, "87af28168b3b0334f708c86211b1c3462e5db939"),
    SSHFP("bastion", 3, 2, "c16222c65681c34d1f00e07957a63bbaa49f90ccf06bff686b7ac1962dc99268"),
    SSHFP("bastion", 4, 1, "3778675b0105dfde4e42d7e47b5378d6f7ccb492"),
    SSHFP("bastion", 4, 2, "7220362106d18c5c4f49047e5d38d8f901affa61dcdfe0f2fc45f1bad3942955"),
    SSHFP("ssh.gitlab", 1, 1, "9d319c15965b939bc2086cbebca96d8bbb89e9a3"),
    SSHFP("ssh.gitlab", 1, 2, "591469a16a3bb33333c2591815e2e88f4508b665477c023eafe845833c060118"),
    SSHFP("ssh.gitlab", 3, 1, "17b29179778339d7c91cb2c281b7afa2798c61d5"),
    SSHFP("ssh.gitlab", 3, 2, "4e203da68ea73ba8c5b28ef040dcb8c4b96d875d2521f8efd5dc6e0da6d522ac"),
    SSHFP("ssh.gitlab", 4, 1, "457e9cb0d575697e27fe8b2185580df5d45ce46b"),
    SSHFP("ssh.gitlab", 4, 2, "63d1b87568887e2e772d1dc89c95ac21bbf895e9141e89eafc7aea4d39bfadcc"),

    // GitLab
    CNAME("gitlab", "ocp-ingress.fastly.gnome.org."),
    CNAME("*.pages.gitlab", "ocp-ingress.fastly.gnome.org."),
    CNAME("registry.gitlab", "ocp-ingress.fastly.gnome.org."),
    CNAME("67d392e4f86e8049013c4e9b216cffbe.gitlab", "verify.bing.com."),
    A("ssh.gitlab", "8.43.85.27"),
    AAAA("ssh.gitlab", "2620:52:3:1:5054:ff:fe8f:413d"),

    A("openqa", "206.189.11.200"),

    // Virtual machines at OSUOSL
    A("signal", "140.211.167.18"),
    CNAME("nagios", "signal.gnome.org."),
    CNAME("status", "signal.gnome.org."),

    // gnome-build-meta x86_64 runner and aux services
    A("m3-large-x86", "147.28.151.79"),
    CNAME("minio", "m3-large-x86.gnome.org."),
    CNAME("onlyoffice.cloud", "m3-large-x86.gnome.org."),

    // Master FTP server
    A("master", "8.43.85.16"),
    A("ftp-master", "8.43.85.16"),

    // BigBlueButton
    A("bbb", "147.75.102.91"),
    A("bbb2", "136.144.48.245"),
    A("turn", "147.28.151.230"),

    // GNOME Nightly
    A("flat-manager", "3.249.48.21"),
    A("flat-manager-ostree", "3.249.48.21"),
    CNAME("nightly", "1692472846.rsc.cdn77.org."),
    CNAME("ostree", "1029332277.rsc.cdn77.org."),

    // CDN
    CNAME("download-fallback", "1586190840.rsc.cdn77.org."),
    CNAME("static", "1009550802.rsc.cdn77.org."),
    CNAME("www-old", "1009550802.rsc.cdn77.org."),

    // International websites
    CNAME("cz", "ocp-ingress.fastly.gnome.org."),
    CNAME("in", "ocp-ingress.fastly.gnome.org."),

    // IRC alias
    CNAME("irc", "irc.libera.chat."),

    // ACME challenges
    CNAME("_acme-challenge.irc", "org.gnome.irc.le.libera.chat."),
    CNAME("_acme-challenge.api-lb.openshift4", "kaeg7jvowakdptiik2.fastly-validations.com."),
    CNAME("_acme-challenge.pages.gitlab", "8trd9e2zeztt8cfs30.fastly-validations.com."),
    CNAME("_acme-challenge.planeta.es", "ftdf04vnjsgsvm7fsv.fastly-validations.com."),
    CNAME("_acme-challenge.planeta.br", "8pbiegbfnhuy46040d.fastly-validations.com."),
    CNAME("_acme-challenge.tools.design", "h014rtn95g0yn5d1rr.fastly-validations.com."),
    CNAME("_acme-challenge.www.es", "1j07im5xepdd14mfwy.fastly-validations.com."),
    CNAME("_acme-challenge.registry.gitlab", "yngfml7re7k4skhmrg.fastly-validations.com."),
    END);
