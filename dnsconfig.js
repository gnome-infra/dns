DEFAULTS(
    DefaultTTL(86400),
    NAMESERVER_TTL(86400)
);

var REG_MONITOR = NewRegistrar("dohdefault");

var REG_GANDI = NewRegistrar("gandi");
var DNS_GANDI = NewDnsProvider("gandi");

var REG_GANDI_ES = NewRegistrar("gandi_es");
var DNS_GANDI_ES = NewDnsProvider("gandi_es");

require_glob('./domains/');
