#!/bin/bash

set -e

cd contracts

echo "Starting fuzz tests"

if yarn --cwd contracts test-echidna; then
  echo "Fuzz tests completed"
else
  echo "Fuzz tests failed"
  exit 1
fi
