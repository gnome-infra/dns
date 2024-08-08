DEFAULTS(
    DefaultTTL(86400),
    NAMESERVER_TTL(86400)
);

var REG_MONITOR = NewRegistrar("dohdefault");

var REG_GANDI = NewRegistrar("gandi");
var DNS_GANDI = NewDnsProvider("gandi");

var REG_GANDI_GR = NewRegistrar("gandigr");
var DNS_GANDI_GR = NewDnsProvider("gandigr");

require_glob('./domains/');
