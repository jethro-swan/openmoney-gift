#!/bin/bash

# Usage:
#    set_embedded_constants <email> <url>

EMAIL=$1
URL=$2
HERE=`pwd`

E1=${EMAIL//./\\.}	# replace '.' with '\.'
EMAIL=$E1
U1=${URL//./\\.}	# replace '.' with '\.'
U2=${U1////\\/}		# replace '/' with '\/'
URL=$U2

# The strings "openmoney.gift" and "openmoney.gift@gmail.com" are fixed in
# various files (a remnant of the original development/test instance.  A
# temporary solution is to perform a global substitution.
#
# "openmoney.gift" is a substring of "openmoney.gift@gmail.com" so the latter
# substitution has to be made first.

find $HERE/app/ -type f -exec sed -i "s/openmoney\.gift@gmail\.com/$EMAIL/g" {} +

find $HERE/app/ -type f -exec sed -i "s/openmoney\.gift/$URL/g" {} +
