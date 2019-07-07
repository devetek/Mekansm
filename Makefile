run-docker-image-build:
	$(eval DEXIST := $(shell command -v docker))
	$(eval DCEXIST := $(shell command -v docker-compose))

	@ test -n "$(DEXIST)" || sh -c 'echo "No docker binary installed" && exit 1'
	@ test -n "$(DCEXIST)" || sh -c 'echo "No docker-compose binary installed" && exit 1'
	@ docker build -f=./docker/Dockerfile --tag prakasa1904/dvt-edutech .
	@ docker push prakasa1904/dvt-edutech:latest

run-dev:
	$(eval DEXIST := $(shell command -v docker))
	$(eval DCEXIST := $(shell command -v docker-compose))

	@ test -n "$(DEXIST)" || sh -c 'echo "No docker binary installed" && exit 1'
	@ test -n "$(DCEXIST)" || sh -c 'echo "No docker-compose binary installed" && exit 1'
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