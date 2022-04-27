help:
	@echo "help"

.PHONY: test
test:
	npm run test

test-cov:
	npm run coverage

lint:
	npm run tslint
	npm run prettier:check

fmt:
	npm run prettier:write

build:
	npm run publish	

gen:
	ucloud-spec create opensdk \
		--only "UFS" \
    	--only "UDisk" \
    	--only "UHost" \
    	--only "PathX" \
    	--only "UDDB" \
    	--only "UCDN" \
    	--only "UNet" \
    	--only "VPC2.0" \
    	--only "UDB" \
    	--only "UMem" \
    	--only "ULB" \
    	--only "Cube" \
    	--only "UK8S" \
    	--only "IPSecVPN" \
    	--only "UAccount" \
    	--only "UDPN" \
    	--only "UBill" \
    	--only "UPHost" \
    	--only "UFile" \
    	--only "USMS" \
    	--only "UEC" \
		--public \
		-s https://git.ucloudadmin.com/apispec/apispec.git \
		/Users/wenqian/.oas/vcs/git.ucloudadmin.com/apispec/template-opensdk-js .
