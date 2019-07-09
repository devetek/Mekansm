
export CCFLAGS
export IS_WINDOWS=false

ifeq ($(OS),Windows_NT)
		IS_WINDOWS = true
    CCFLAGS += -D WIN32
    ifeq ($(PROCESSOR_ARCHITEW6432),AMD64)
        CCFLAGS += -D AMD64
    else
        ifeq ($(PROCESSOR_ARCHITECTURE),AMD64)
            CCFLAGS += -D AMD64
        endif
        ifeq ($(PROCESSOR_ARCHITECTURE),x86)
            CCFLAGS += -D IA32
        endif
    endif
else
    UNAME_S := $(shell uname -s)
    ifeq ($(UNAME_S),Linux)
        CCFLAGS += -D LINUX
    endif
    ifeq ($(UNAME_S),Darwin)
        CCFLAGS += -D OSX
    endif
    UNAME_P := $(shell uname -p)
    ifeq ($(UNAME_P),x86_64)
        CCFLAGS += -D AMD64
    endif
    ifneq ($(filter %86,$(UNAME_P)),)
        CCFLAGS += -D IA32
    endif
    ifneq ($(filter arm%,$(UNAME_P)),)
        CCFLAGS += -D ARM
    endif
endif

run-validate:
	$(eval DEXIST := $(shell command -v docker))
	$(eval DCEXIST := $(shell command -v docker-compose))

	@ test "$(IS_WINDOWS)" == "false" || sh -c 'echo "OS is Windows, script not support yet" && exit 1'
	@ test -n "$(DEXIST)" || sh -c 'echo "No docker binary installed" && exit 1'
	@ test -n "$(DCEXIST)" || sh -c 'echo "No docker-compose binary installed" && exit 1'

run-docker-image-build: run-validate
	@ docker build -f=./docker/Dockerfile --tag prakasa1904/dvt-edutech .
	@ docker push prakasa1904/dvt-edutech:latest

run-dev: run-validate
	@ docker-compose -f docker/dev.docker-compose.yml up

run-update:
	# update when using custom plugin, like cordova
	@ npx cap update

run-build:
	@ rm -rf www
	@ npm run-script build --prod --aot

run-build-ios:
	@ test -d ios || npx cap add ios
	@ npx cap sync
	@ npx cap open ios
	# Manual step to replace ios splashscreen and launcher assets. Cannot replace using capacitor native config
	@ sleep 10
	# @ test ! -d ios || cp -rf resources/ios-assets/ ios/App/App/Assets.xcassets/

run-build-android:
	@ test -d android || npx cap add android
	@ npx cap sync
	@ npx cap open android
	# Manual step to replace android splashscreen and launcher assets. Cannot replace using capacitor native config
	@ sleep 10
	# @ test ! -d android || cp -rf resources/android-assets/ android/app/src/main/res/

run-build-desktop:
	@ npx cap add electron
	@ npx cap sync