import { Control, Teact, Property, Modes, DomHandler } from '@tuval/forms';
import * as MarkdownIt from "markdown-it";

const css = require('./LeftMenuControl.css');
DomHandler.addCssToDocument(css);
debugger;
export class LeftMenuControl extends Control<LeftMenuControl> {
    public CreateElements() {
        return (
            <nav data-toggle="wy-nav-shift" class="wy-nav-side">
                <div class="wy-side-nav-search">
                    <a href="../" class="fa fa-home"> Procetra Book</a>
                    <div role="search">
                        <form id="rtd-search-form" class="wy-form" action="../search/" method="get">
                            <input type="text" name="q" placeholder="Search" />
                            <input type="hidden" name="check_keywords" value="yes" />
                            <input type="hidden" name="area" value="default" />
                        </form>
                    </div>
                </div>

                <div class="wy-menu wy-menu-vertical" data-spy="affix" role="navigation" aria-label="main navigation">
                    <ul class="current">
                        <li class="toctree-l1"><a class="reference internal" href="../foreword/">Foreword</a></li>
                        <li class="toctree-l1"><a class="reference internal" href="../aboutbook/">About This Book</a></li>
                        <li class="toctree-l1">
                            <a class="reference internal" href="../gettingstarted/">Getting Started</a>
                            <ul>
                                <li class="toctree-l2"><a class="reference internal" href="../intro/">What Is Process Mining?</a></li>
                                <li class="toctree-l2"><a class="reference internal" href="../tutorial/">Hands-on Tutorial</a></li>
                                <li class="toctree-l2"><a class="reference internal" href="../usecases/">Process Mining Use Cases</a></li>
                                <li class="toctree-l2"><a class="reference internal" href="../positioning/">What Process Mining Is Not</a></li>
                                <li class="toctree-l2"><a class="reference internal" href="../dataext/">Data Requirements</a></li>
                                <li class="toctree-l2"><a class="reference internal" href="../dataextchecklist/">Checklist: Prepare Your Own Data Extraction</a></li>
                            </ul>
                        </li>
                        <li class="toctree-l1">
                            <a class="reference internal" href="../howtoguide/">“How To …?”</a>
                            <ul>
                                <li class="toctree-l2"><a class="reference internal" href="../datasuitability/">Assess the Suitability of Your Data</a></li>
                                <li class="toctree-l2"><a class="reference internal" href="../dataquality/">Detect and Fix Data Quality Problems</a></li>
                                <li class="toctree-l2"><a class="reference internal" href="../incompletecases/">Deal With Incomplete Cases</a></li>
                                <li class="toctree-l2"><a class="reference internal" href="../simplification/">Simplify Complex Process Maps</a></li>
                                <li class="toctree-l2"><a class="reference internal" href="../perspectives/">Take Different Perspectives On Your Process</a></li>
                                <li class="toctree-l2"><a class="reference internal" href="../project/">Run a Process Mining Project</a></li>
                            </ul>
                        </li>
                        <li class="toctree-l1 current">
                            <a class="reference internal" href="../reference/">Procetra User Guide</a>
                            <ul class="current">
                                <li class="toctree-l2"><a class="reference internal" href="../installation/">BPM Genesis</a></li>
                                <li class="toctree-l2 current"><a class="current reference internal" href="#">Import Event Data</a></li>
                                <li class="toctree-l2"><a class="reference internal" href="../mapview/">Analyzing Process Maps</a></li>
                                <li class="toctree-l2"><a class="reference internal" href="../statisticsview/">Analyzing Statistics</a></li>
                                <li class="toctree-l2"><a class="reference internal" href="../casesview/">Analyzing Cases</a></li>

                            </ul>
                        </li>
                        <li class="toctree-l1"><a class="reference internal" href="../feedback/">Feedback</a></li>
                    </ul>
                </div>
                &nbsp;
            </nav>

        );
    }

}