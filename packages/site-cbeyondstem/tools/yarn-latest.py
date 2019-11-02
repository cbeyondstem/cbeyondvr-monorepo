import os
import sys
import json
rdir = os.path.dirname(__file__)


def logYarnCommand():
  pkg = []
  with open(os.path.join(rdir,'../gatsby-starter-typescript-plus/package.json')) as json_file:
    cfg = json.load(json_file)
    pkgs = ' '.join(list(cfg["dependencies"].keys()))
    print('yarn add {}'.format(pkgs))
    pkgs = ' '.join(list(cfg["devDependencies"].keys()))
    print('yarn add --dev {}'.format(pkgs))

if __name__ == "__main__":
  logYarnCommand()
