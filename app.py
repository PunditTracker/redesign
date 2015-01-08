from flask import Flask, render_template
from flask.ext.assets import Environment, Bundle
from util.text import truncate
from config import config
import json
import random
app = Flask(__name__)

post_html = """

    <p>As the Wall Street analysts<a href=
    "http://online.barrons.com/articles/outlook-2015-stick-with-the-bull-1418449329?mod=BOL_hp_highlight_1"
    target="_blank">&nbsp;chime in</a> with their 2015 S&amp;P 500 predictions,
    let's revisit how the six bulge bracket firms&nbsp;did with their
    prognostications over the past four&nbsp;years.</p>

    <h4>Annual S&amp;P 500 Forecasts</h4>

    <table>
        <thead>
            <tr>
                <th>Bank</th>

                <th>2011</th>

                <th>2012</th>

                <th>2013</th>

                <th>2014</th>

                <th>2015</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>UBS</td>

                <td>1350</td>

                <td>1325</td>

                <td>1425</td>

                <td>1950</td>

                <td>2250</td>
            </tr>

            <tr>
                <td>Barclays</td>

                <td>1420</td>

                <td>1330</td>

                <td>1525</td>

                <td>1900</td>

                <td>2100</td>
            </tr>

            <tr>
                <td>Credit Suisse</td>

                <td>1250</td>

                <td>1340</td>

                <td>1550</td>

                <td>1960</td>

                <td>2200</td>
            </tr>

            <tr>
                <td>Goldman Sachs</td>

                <td>1450</td>

                <td>1250</td>

                <td>1575</td>

                <td>1900</td>

                <td>2100</td>
            </tr>

            <tr>
                <td>JP Morgan</td>

                <td>1400</td>

                <td>1430</td>

                <td>1580</td>

                <td>2075</td>

                <td>2200</td>
            </tr>

            <tr>
                <td>Bank of America Merrill Lynch</td>

                <td>1400</td>

                <td>1350</td>

                <td>1600</td>

                <td>2000</td>

                <td>2200</td>
            </tr>

            <tr>
                <td>Actual</td>

                <td>1258</td>

                <td>1426</td>

                <td>2083</td>

                <td>2083*</td>

                <td></td>
            </tr>
        </tbody>

        <tfoot>
            <tr>
                <th>Average (Banks)</th>

                <th>1378</th>

                <th>1338</th>

                <th>1543</th>

                <th>1964</th>

                <th>2175</th>
            </tr>
        </tfoot>
    </table>

    <table>
        <thead>
            <tr>
                <th></th>

                <th>2011</th>

                <th>2012</th>

                <th>2013</th>

                <th>2014</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>Average Projected Rise</td>

                <td>9.9%</td>

                <td>6.4%</td>

                <td>8.2%</td>

                <td>6.3%</td>
            </tr>

            <tr>
                <td>Actual Rise</td>

                <td>0.3%</td>

                <td>13.4%</td>

                <td>29.6%</td>

                <td>12.7%*</td>
            </tr>
        </tbody>
    </table>

    <p>The mean S&amp;P estimate has&nbsp;been considerably off-target each
    year: by +960 basis points in 2011, -700 basis points in 2012, a whopping
    -2140 basis points in 2013, and as of this morning, -640 basis points this
    year.</p>

    <p>What's most interesting is that&nbsp;the clustering effect has been very
    pronounced, with five of the six analyst predictions each year falling
    within a 100 point range (1350-1450 in 2011, 1250-1350 in 2012, 1500-1600
    in 2013, and 1900-2000 in 2014) &mdash;&nbsp;<strong>ranges which failed to
    capture the actual result in every
    instance<em>.</em></strong><em>&nbsp;</em></p>

    <p>So what is behind the errant clustering? The biases
    of&nbsp;anchoring&nbsp;and recency are likely culprits,&nbsp;with analysts
    anchoring to a baseline and extrapolating from recent trends.
    <span class="img inline left">
        <img src="/static/img/hero.jpg">
        <label class="caption">This image has a caption. Captions may extend onto
        multiple lines if they want, <em>and can contain</em> <strong>HTML as well</strong>.</label>
    </span>We believe
    career risk is also at play: as investor Joel Greenblatt put it, "It's much
    safer to be wrong in a crowd than to risk being the only one to misread a
    situation that everyone else had pegged correctly."</p>

    <p>But how do we reconcile the incentive for pundits to not stray from the
    consensus &mdash; and thus minimize career risk &mdash; with the bombastic
    pundits that we all love to rail on? But how do we reconcile the incentive for pundits to not stray from the
    consensus &mdash; and thus minimize career risk &mdash; with the bombastic
    pundits that we all love to rail on? But how do we reconcile the incentive for pundits to not stray from the
    consensus &mdash; and thus minimize career risk &mdash; with the bombastic
    pundits that we all love to rail on?

    <div class="table inline right">
        <table>
            <thead>
                <tr>
                    <th>Bank</th>
                    <th>2011</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>UBS</td>

                    <td>1350</td>
                </tr>

                <tr>
                    <td>Barclays</td>

                    <td>1420</td>
                </tr>

                <tr>
                    <td>Credit Suisse</td>

                    <td>1250</td>
                </tr>

                <tr>
                    <td>Goldman Sachs</td>

                    <td>1450</td>
                </tr>

                <tr>
                    <td>JP Morgan</td>

                    <td>1400</td>
                </tr>

                <tr>
                    <td>Bank of America Merrill Lynch</td>

                    <td>1400</td>
                </tr>

                <tr>
                    <td>Actual</td>

                    <td>1258</td>
                </tr>
            </tbody>

            <tfoot>
                <tr>
                    <th>Average (Banks)</th>

                    <th>1378</th>
                </tr>
            </tfoot>
        </table>
        <label class="caption">Tables can be inline too! They can also have captions.</label>
    </div>

    But how do we reconcile the incentive for pundits to not stray from the
    consensus &mdash; and thus minimize career risk &mdash; with the bombastic
    pundits that we all love to rail on? Why aren't they concerned about
    career risk? Well, here's the catch:</p>

    <p>In punditry, if you are going to be wrong, it pays to be spectacularly
    wrong. In punditry, if you are going to be wrong, it pays to be spectacularly
    wrong. In punditry, if you are going to be wrong, it pays to be spectacularly
    wrong.</p>

    <p>We explain using the following matrix:</p>

    <h4>Reaction to outcomes by prediction type</h4>

    <table>
        <thead>
            <tr>
                <th>Prediction Type</th>

                <th>Outcome: Correct</th>

                <th>Outcome: Incorrect</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>Consensus</td>

                <td>Expected</td>

                <td>Forgivable</td>
            </tr>

            <tr>
                <td>Contrarian</td>

                <td>Subdued Praise</td>

                <td>Pink Slip</td>
            </tr>

            <tr>
                <td>Wildly Contrarian</td>

                <td>Hero</td>

                <td>Celebrity</td>
            </tr>
        </tbody>
    </table>

    <p>The first prediction type ("Consensus") is greeted with minimal credit
    when correct and minimal blame when incorrect. As we discussed with the
    S&amp;P 500 forecasters, pundits focused on career preservation adhere to
    this 'safety in numbers' approach. The last prediction type ("Wildly
    Contrarian") is typically made by pundits who crave media attention.
    Regardless of outcome, they are able to parlay their provocative
    predictions and media prowess into cash by writing books, hitting the
    speaking circuit, and developing a cult-like following. This is
    how&nbsp;<a href="http://blog.pundittracker.com/one-hit-wonders/" target=
    "_blank">One-Hit Wonders</a>&nbsp;and&nbsp;<a href=
    "http://blog.pundittracker.com/broken-clocks-2/" target="_blank">Broken
    Clocks</a>&nbsp;are born.</p>

    <p>And here is an image, for your viewing. They are centered, and given a maximum height.</p>

    <p><img src="/static/img/hero.jpg"></p>

    <p>That leaves the middle prediction type, which we refer to as the
    'Bermuda Triangle' of punditry. These pundits are contrarian enough to
    create career risk for themselves but not contrarian enough to garner
    mainstream attention. Correct predictions are greeted with modest praise
    &ndash; say, a pat on the back from a few colleagues &ndash; while
    incorrect predictions draw intense scrutiny. Low reward, high risk.</p>

    <p>The following are some colors, collected randomly:</p>

    <ul>
        <li>Blue, because when text wraps, I like to observe the behavior that my stylesheet has applied to elements.</li>
        <li>Orange</li>
        <li>Green</li>
        <li>Red</li>
    </ul>

    <p>Our hunch is that the best pundits are stuck in this Bermuda Triangle,
    quietly amassing first-rate track records but lacking a platform to reach a
    wider audience. <img class="inline right" src="/static/img/hero.jpg"> Instead, our professional ranks and airwaves are cluttered
    with pundits who make Consensus and Wildly Contrarian predictions. Nate
    Silver is a rare exception, having made the leap from quant to superstar.
    We would argue that Silver was aided by the criticism leveled at him by
    conservatives, which created a false perception that his election
    predictions were wildly contrarian when they were&nbsp;<a href=
    "http://blog.pundittracker.com/is-nate-silver-a-wizard-or-simply-above-average/"
    target="_blank">in fact only moderately so</a>.  We would argue that Silver was aided by the criticism leveled at him by
    conservatives, which created a false perception that his election
    predictions were wildly contrarian when they were&nbsp;<a href=
    "http://blog.pundittracker.com/is-nate-silver-a-wizard-or-simply-above-average/"
    target="_blank">in fact only moderately so</a>.</p>

    <p>The following are my favorite colors:</p>

    <ol>
        <li>Blue, because when text wraps, I like to observe the behavior that my stylesheet has applied to elements.</li>
        <li>Orange</li>
        <li>Green</li>
        <li>Red</li>
    </ol>

    <p>PunditTracker aims to disrupt the prediction industry&nbsp;by offering a
    common platform for everyone &mdash;<a href=
    "http://www.pundittracker.com/">&nbsp;including
    yourself&nbsp;</a>&nbsp;&ndash; to make predictions. By leveling the
    playing field and holding everyone equally accountable, we strive to
    introduce a much-needed dose of meritocracy into the system.</p>

    <p><em>This is an updated post from previous years. If you think you can
    best these pundits, head over to <a href="http://www.pundittracker.com"
    target="_blank">PunditTracker</a> to make your own predictions for 2015. We
    will be adding many predictions in the weeks ahead and will grade you
    afterwards!</em></p>

"""

truncated_html = truncate(post_html, 255)
r_elem = (lambda l: l[random.randint(0, len(l) - 1)])

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/grid')
def grid():
    return render_template('grid.html', random=r_elem)

@app.route('/grid/blog')
def blog():
    return render_template('blog.html',
                           random=r_elem,
                           post_html=post_html,
                           truncated_html=truncated_html)

@app.route('/grid/blog/post')
def post():
    return render_template('post.html', random=r_elem, post_html=post_html)

@app.route('/angle')
def angle():
    return render_template('angle.html', random=r_elem)


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
