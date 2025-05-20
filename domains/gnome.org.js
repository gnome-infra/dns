D("gnome.org", REG_GANDI,
    DnsProvider(DNS_CLOUDNS),
    DefaultTTL('1h'),

    // Verification(s)
    TXT("@", "google-site-verification=CERH6P8oe_jgCNAsVY7ZnHJba1Csf2hHJ779kJPtXKA"),
    TXT("@", "MS=ms80787754"),

    // Delegation(s)
    NS("openshift", "ns-527.awsdns-01.net."),
    NS("openshift", "ns-444.awsdns-55.com."),
    NS("openshift", "ns-1565.awsdns-03.co.uk."),
    NS("openshift", "ns-1149.awsdns-15.org."),
    DS("openshift", 65413, 13, 2, "0431E5213EC93739217B7BE1E96450FB2091794881F9B14B31586E5C2D4BF6B1"),

    A("smtp", "44.216.4.43"),

    // SPF
    TXT("@", "v=spf1 a:smtp.gnome.org -all"),
    TXT("smtp", "v=spf1 a:smtp.gnome.org -all"),
    TXT("bastion02", "v=spf1 a:smtp.gnome.org -all"),
    TXT("idm03", "v=spf1 a:smtp.gnome.org -all"),
    TXT("idm04", "v=spf1 a:smtp.gnome.org -all"),
    TXT("signal", "v=spf1 a:smtp.gnome.org -all"),

    // DKIM & DMARC
    TXT("default._domainkey", "v=DKIM1; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDTA1zgW8+e7haZgEoZAMmoMC7jwekFKv6AV7OQbsOKLpAnLivyVUbFe5Rg9MwIRDL2D5fBaItjDojgpZJlr8lPLEcB8R5eGj7rKSUAgd0ufSoV+rmYbQGu0+A3Kuz/ynJCmw86K3UrjqMW/YHGAv4Jg/+Dx2e0cUKbJu43fvgZ6QIDAQAB"),
    TXT("default._domainkey.bastion02", "v=DKIM1; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDTA1zgW8+e7haZgEoZAMmoMC7jwekFKv6AV7OQbsOKLpAnLivyVUbFe5Rg9MwIRDL2D5fBaItjDojgpZJlr8lPLEcB8R5eGj7rKSUAgd0ufSoV+rmYbQGu0+A3Kuz/ynJCmw86K3UrjqMW/YHGAv4Jg/+Dx2e0cUKbJu43fvgZ6QIDAQAB"),
    TXT("default._domainkey.idm03", "v=DKIM1; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDTA1zgW8+e7haZgEoZAMmoMC7jwekFKv6AV7OQbsOKLpAnLivyVUbFe5Rg9MwIRDL2D5fBaItjDojgpZJlr8lPLEcB8R5eGj7rKSUAgd0ufSoV+rmYbQGu0+A3Kuz/ynJCmw86K3UrjqMW/YHGAv4Jg/+Dx2e0cUKbJu43fvgZ6QIDAQAB"),
    TXT("default._domainkey.idm04", "v=DKIM1; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDTA1zgW8+e7haZgEoZAMmoMC7jwekFKv6AV7OQbsOKLpAnLivyVUbFe5Rg9MwIRDL2D5fBaItjDojgpZJlr8lPLEcB8R5eGj7rKSUAgd0ufSoV+rmYbQGu0+A3Kuz/ynJCmw86K3UrjqMW/YHGAv4Jg/+Dx2e0cUKbJu43fvgZ6QIDAQAB"),
    TXT("default._domainkey.src", "v=DKIM1; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDTA1zgW8+e7haZgEoZAMmoMC7jwekFKv6AV7OQbsOKLpAnLivyVUbFe5Rg9MwIRDL2D5fBaItjDojgpZJlr8lPLEcB8R5eGj7rKSUAgd0ufSoV+rmYbQGu0+A3Kuz/ynJCmw86K3UrjqMW/YHGAv4Jg/+Dx2e0cUKbJu43fvgZ6QIDAQAB"),
    TXT("default._domainkey.signal", "v=DKIM1; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDTA1zgW8+e7haZgEoZAMmoMC7jwekFKv6AV7OQbsOKLpAnLivyVUbFe5Rg9MwIRDL2D5fBaItjDojgpZJlr8lPLEcB8R5eGj7rKSUAgd0ufSoV+rmYbQGu0+A3Kuz/ynJCmw86K3UrjqMW/YHGAv4Jg/+Dx2e0cUKbJu43fvgZ6QIDAQAB"),
    TXT("_dmarc", "v=DMARC1; p=reject; adkim=s; aspf=s;"),

    // FreeIPA
    CNAME("idm01", "ingress.openshift.gnome.org."),
    CNAME("idm02", "ingress.openshift.gnome.org."),
    CNAME("idm", "IDM-1201390071.us-east-1.elb.amazonaws.com."),
    CNAME("_7b45e79a96a58d6c8d893a6c8144d2ce.idm", "_cf5f5afa9f01c2f76592fa301f7bde13.djqtsrsxkq.acm-validations.aws."),

    // OpenShift @ AWS
    ALIAS("@", "ingress.openshift.gnome.org."),
    CNAME("blogs", "ingress.openshift.gnome.org."),
    CNAME("bugzilla", "1342705358.rsc.cdn77.org."),
    CNAME("cloud", "ingress.openshift.gnome.org."),
    CNAME("conduct", "ingress.openshift.gnome.org."),
    CNAME("discourse", "ingress.openshift.gnome.org."),
    CNAME("events", "ingress.openshift.gnome.org."),
    CNAME("extensions", "ingress.openshift.gnome.org."),
    CNAME("foundation", "ingress.openshift.gnome.org."),
    CNAME("gjs-docs", "ingress.openshift.gnome.org."),
    CNAME("help", "ingress.openshift.gnome.org."),
    CNAME("listmonk", "ingress.openshift.gnome.org."),
    CNAME("l10n", "ingress.openshift.gnome.org."),
    CNAME("meet", "ingress.openshift.gnome.org."),
    CNAME("mutter", "ingress.openshift.gnome.org."),
    CNAME("nominatim", "ingress.openshift.gnome.org."),
    CNAME("odrs", "1527653184.rsc.cdn77.org."),
    CNAME("os", "ingress.openshift.gnome.org."),
    CNAME("pad", "ingress.openshift.gnome.org."),
    CNAME("password", "ingress.openshift.gnome.org."),
    CNAME("paste", "ingress.openshift.gnome.org."),
    CNAME("planet", "ingress.openshift.gnome.org."),
    CNAME("register.gitlab", "ingress.openshift.gnome.org."),
    CNAME("security", "ingress.openshift.gnome.org."),
    CNAME("shop", "ingress.openshift.gnome.org."),
    CNAME("sso", "ingress.openshift.gnome.org."),
    CNAME("tileserver", "1820235950.rsc.cdn77.org."),
    CNAME("vote", "ingress.openshift.gnome.org."),
    CNAME("webstats", "ingress.openshift.gnome.org."),
    CNAME("wiki", "1876207943.rsc.cdn77.org."),
    CNAME("www", "ingress.openshift.gnome.org."),

    // Redirects
    CNAME("api", "ingress.openshift.gnome.org."),
    CNAME("art", "ingress.openshift.gnome.org."),
    CNAME("bugs", "ingress.openshift.gnome.org."),
    CNAME("build", "ingress.openshift.gnome.org."),
    CNAME("chat", "ingress.openshift.gnome.org."),
    CNAME("developer", "ingress.openshift.gnome.org."),
    CNAME("ftp", "ingress.openshift.gnome.org."),
    CNAME("gis", "ingress.openshift.gnome.org."),
    CNAME("git", "ingress.openshift.gnome.org."),
    CNAME("hedgedoc", "ingress.openshift.gnome.org."),
    CNAME("i18n", "ingress.openshift.gnome.org."),
    CNAME("las", "ingress.openshift.gnome.org."),
    CNAME("library", "ingress.openshift.gnome.org."),
    CNAME("live", "ingress.openshift.gnome.org."),
    CNAME("news", "ingress.openshift.gnome.org."),
    CNAME("nl", "ingress.openshift.gnome.org."),
    CNAME("opw", "ingress.openshift.gnome.org."),
    CNAME("outreachy", "ingress.openshift.gnome.org."),
    CNAME("people", "ingress.openshift.gnome.org."),
    CNAME("projects", "ingress.openshift.gnome.org."),
    CNAME("projects-old", "ingress.openshift.gnome.org."),
    CNAME("src", "ingress.openshift.gnome.org."),
    CNAME("torrent", "ingress.openshift.gnome.org."),
    CNAME("torrents", "ingress.openshift.gnome.org."),
    CNAME("pygtk", "ingress.openshift.gnome.org."),

    // Custom domains for GitLab Pages
    CNAME("api.pygobject", "ingress.openshift.gnome.org."),
    CNAME("apps", "ingress.openshift.gnome.org."),
    CNAME("br", "ingress.openshift.gnome.org."),
    CNAME("brand", "ingress.openshift.gnome.org."),
    CNAME("cantarell", "ingress.openshift.gnome.org."),
    CNAME("circle", "ingress.openshift.gnome.org."),
    CNAME("forty", "ingress.openshift.gnome.org."),
    CNAME("foundation-handbook", "ingress.openshift.gnome.org."),
    CNAME("glade", "ingress.openshift.gnome.org."),
    CNAME("gsoc", "ingress.openshift.gnome.org."),
    CNAME("gtkmm", "ingress.openshift.gnome.org."),
    CNAME("handbook", "ingress.openshift.gnome.org."),
    CNAME("libsoup", "ingress.openshift.gnome.org."),
    CNAME("nepal", "ingress.openshift.gnome.org."),
    CNAME("orca", "ingress.openshift.gnome.org."),
    CNAME("pygobject", "ingress.openshift.gnome.org."),
    CNAME("release", "ingress.openshift.gnome.org."),
    CNAME("thisweek", "ingress.openshift.gnome.org."),
    CNAME("tools.design", "ingress.openshift.gnome.org."),
    CNAME("tracker", "ingress.openshift.gnome.org."),
    CNAME("tracker.api", "ingress.openshift.gnome.org."),
    CNAME("welcome", "ingress.openshift.gnome.org."),

    // Fastly
    CNAME("nmcheck", "dualstack.n.sni.global.fastly.net."),

    // Sysadmin
    A("bastion02", "98.83.131.224"),

    // Mail
    CNAME("mail", "1222440682.rsc.cdn77.org."),
    CNAME("lists", "1222440682.rsc.cdn77.org."),
    CNAME("staff-mail", "smtp.gnome.org."),
    SRV("_imaps._tcp.staff-mail", 0, 1, 993, "staff-mail.gnome.org."),
    SRV("_submission._tcp.staff-mail", 0, 1, 587, "staff-mail.gnome.org."),
    SRV("_matrix._tcp", 10, 5, 443, "gnome.modular.im."),

    // MX records
    MX("@", 10, "smtp.gnome.org."),

    // SSHFP entries
    SSHFP("bastion02", 1, 1, "aac50ca7d7ec601d4a76daef4020cecd052af915"),
    SSHFP("bastion02", 1, 2, "f2ed6feb9cfac152fba01ec4d76370388a7860d3de579443f9f81647ca7cb1d2"),
    SSHFP("bastion02", 3, 1, "137817cd1c01b950190208df27597da197a891ac"),
    SSHFP("bastion02", 3, 2, "50e998ed170a42c9845ae1616c1cd8a8181e073bc9de075ee820e541d5234f0a"),
    SSHFP("bastion02", 4, 1, "37ea8715fa6cd8c1fbbf50aa0447ae290db8d81c"),
    SSHFP("bastion02", 4, 2, "c1e97934f25ec8fff19dc98a03e0aab3893cc7f32c7984ec3c43db172a132c88"),
    SSHFP("ssh.gitlab", 1, 1, "9d319c15965b939bc2086cbebca96d8bbb89e9a3"),
    SSHFP("ssh.gitlab", 1, 2, "591469a16a3bb33333c2591815e2e88f4508b665477c023eafe845833c060118"),
    SSHFP("ssh.gitlab", 3, 1, "17b29179778339d7c91cb2c281b7afa2798c61d5"),
    SSHFP("ssh.gitlab", 3, 2, "4e203da68ea73ba8c5b28ef040dcb8c4b96d875d2521f8efd5dc6e0da6d522ac"),
    SSHFP("ssh.gitlab", 4, 1, "457e9cb0d575697e27fe8b2185580df5d45ce46b"),
    SSHFP("ssh.gitlab", 4, 2, "63d1b87568887e2e772d1dc89c95ac21bbf895e9141e89eafc7aea4d39bfadcc"),

    // GitLab
    CNAME("gitlab", "ingress.openshift.gnome.org."),
    CNAME("registry.gitlab", "ingress.openshift.gnome.org."),
    CNAME("67d392e4f86e8049013c4e9b216cffbe.gitlab", "verify.bing.com."),
    A("ssh.gitlab", "98.83.181.181"),

    NS("pages.gitlab", "ns-270.awsdns-33.com."),
    NS("pages.gitlab", "ns-1725.awsdns-23.co.uk."),
    NS("pages.gitlab", "ns-1004.awsdns-61.net."),
    NS("pages.gitlab", "ns-1514.awsdns-61.org."),
    DS("pages.gitlab", 65413, 13, 2, "AD22765C9599CBACDD5EB15959B343E9C1206BE6282A7F868823935EAFCDC933"),

    A("openqa", "206.189.11.200"),

    // Virtual machines at OSUOSL
    A("signal", "140.211.167.18"),
    CNAME("status", "signal.gnome.org."),

    // gnome-build-meta and aux services
    A("m3-large-x86", "147.28.151.79"),
    CNAME("minio", "m3-large-x86.gnome.org."),
    CNAME("onlyoffice.cloud", "m3-large-x86.gnome.org."),
    A("gbm", "8.43.85.21"),
    CNAME("onlyoffice.gbm", "gbm.gnome.org."),

    // BigBlueButton
    A("bbb", "147.75.102.91"),
    A("bbb2", "136.144.48.245"),
    A("turn", "147.28.151.230"),
    A("bbb3", "8.43.85.20"),

    // GNOME Nightly
    A("flat-manager", "3.249.48.21"),
    CNAME("nightly", "1692472846.rsc.cdn77.org."),

    // CDN
    CNAME("download", "1673558209.rsc.cdn77.org."),
    CNAME("static", "1009550802.rsc.cdn77.org."),
    CNAME("www-old", "1009550802.rsc.cdn77.org."),
    CNAME("exchange-api", "1319176167.rsc.cdn77.org."),

    // International websites
    CNAME("cz", "ingress.openshift.gnome.org."),
    CNAME("in", "ingress.openshift.gnome.org."),
    CNAME("gr", "ingress.openshift.gnome.org."),

    // IRC alias
    CNAME("irc", "irc.libera.chat."),

    // ACME challenges
    CNAME("_acme-challenge.irc", "org.gnome.irc.le.libera.chat."),
    CNAME("_acme-challenge.nmcheck", "g7q0za0s6hoy2sswcb.fastly-validations.com."),

    // dnswl.org
    TXT("_token._dnswl", "hewo9ao76bak72hj4ibztak7761mk97y"),

    END);
