from flask import Flask, render_template
from flask.ext.assets import Environment, Bundle
from config import config
import json
import random
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/grid')
def grid():
    return render_template('grid.html',
                           random=(lambda l: l[random.randint(0, len(l) - 1)]))


@app.route('/angle')
def angle():
    return render_template('angle.html',
                           random=(lambda l: l[random.randint(0, len(l) - 1)]))


def register_scss():
    """"""
    assets.url = app.static_url_path
    with open('config/scss.json') as f:
        bundle_instructions = json.loads(f.read())
        for _, bundle_set in bundle_instructions.iteritems():
            output_folder = bundle_set['output_folder']
            depends = bundle_set['depends']
            for bundle_name, instructions in bundle_set['rules'].iteritems():
                bundle = Bundle(*instructions['inputs'],
                                output=output_folder + instructions['output'],
                                depends=depends,
                                filters='scss')
                assets.register(bundle_name, bundle)

assets = Environment(app)
app.config.from_object('config.config')
register_scss()

if __name__ == '__main__':
    app.run(port=config.PORT, host=config.HOST)
