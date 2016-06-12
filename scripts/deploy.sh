#!/bin/bash

# set -e

if [ -n "$GITHUB_API_KEY" ]; then

	cd "$TRAVIS_BUILD_DIR/build"

	# Step into the directory containing the CV created by the
	# build process.
	cd "$CV_BUILD_DIRECTORY"

	# Initialize the directory containing the CV as a GIT
	# repository.
	git init

	# Create a `gh-pages` branch; the contents of this branch
	# is what GitHub will publish.
	git checkout -b gh-pages

	# Stage the CV files for commit.
	git add .

	# Commit.
	#
	# Leave a nice commit message on behalf of Travis.
	git -c user.name="Travis CI" -c user.email="lsphillips.mail@gmail.com" commit -m "CV build #$TRAVIS_BUILD_NUMBER run by Travis CI."

	# Push.
	#
	# Ensure all output is suppressed; just so we don't reveal
	# anything sensitive.
	git push -f -q https://lsphillips:$GITHUB_API_KEY@github.com/lsphillips/CV gh-pages &2>/dev/null

	# To finish things up, go back to the build directory.
	cd "$TRAVIS_BUILD_DIR"

fi
