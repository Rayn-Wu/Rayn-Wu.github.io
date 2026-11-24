---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hi there! I am Yuan Wu (吴渊), a Ph.D. student at <a href="http://www.patternrecognition.asia/" style="text-decoration: none;">PCALab</a>, School of Computer Science and Engineering, <a href="https://www.njust.edu.cn/" style="text-decoration: none;">Nanjing University of Science and Technology (NJUST)</a>. I am fortunate to be supervised by <a href="https://scholar.google.com.hk/citations?user=6CIDtZQAAAAJ&hl=en" style="text-decoration: none;">Prof. Jian Yang</a> and co-supervised by <a href="http://yanzq95.github.io/" style="text-decoration: none;">Dr. Zhiqiang Yan</a>.



If you’re interested in my research, feel free to reach out with any questions or suggestions! 😊



<section class="research-interests" aria-labelledby="research-interests">
  <h1 id="research-interests">🔍 Research Interests</h1>
  <div class="research-interests__grid">
    <article class="research-interests__card">
      <h2><i class="fas fa-fw fa-eye" aria-hidden="true"></i><span>2D Depth Perception</span></h2>
      <p>Estimating depth from visual observations to recover scene geometry.</p>
    </article>
    <article class="research-interests__card">
      <h2><i class="fas fa-fw fa-cubes" aria-hidden="true"></i><span>3D Occupancy Perception</span></h2>
      <p>Determining each 3D voxel’s occupancy status and semantic class.</p>
    </article>
    <article class="research-interests__card">
      <h2><i class="fas fa-fw fa-globe" aria-hidden="true"></i><span>World Model</span></h2>
      <p>Learning representations of scene dynamics to predict how the world may evolve.</p>
    </article>
  </div>
</section>


# 📝 Publications 

<div class="publication-filters" role="group" aria-label="Filter publications" hidden>
  <button type="button" data-filter="all" aria-pressed="true">All</button>
  <button type="button" data-filter="depth" aria-pressed="false">2D Depth Perception</button>
  <button type="button" data-filter="occupancy" aria-pressed="false">3D Occupancy Prediction</button>
  <button type="button" data-filter="world-model" aria-pressed="false">World Model</button>
</div>
<script src="{{ '/assets/js/publication-filters.js' | relative_url }}" defer></script>



<div id="publication-list" class="publication-list" markdown="1">
<div class="paper-box" id="sap" data-publication-category="occupancy">
<div class="paper-box-image"><div>
<div class="badge badge--arxiv">arXiv 2026</div>
<img src="{{ '/projects/SAP.png' | relative_url }}" alt="Uniform reference sampling compared with SAP’s depth-guided scene-adaptive sampling" loading="lazy">
</div></div>
<div class="paper-box-text" markdown="1">


<h3 class="paper-title">Seeing 3D Occupancy Through Scene-Adaptive Projection</h3>

<p class="paper-authors">
<strong>Yuan Wu</strong>,
<a href="https://yanzq95.github.io/">Zhiqiang Yan</a> &#9993;,
<a href="https://wzx0826.github.io/">Zhengxue Wang</a>,
<a href="https://scholar.google.com/citations?user=Wtit76gAAAAJ&amp;hl=zh-CN">Guangfa Wang</a>,
<a href="https://sites.google.com/view/junlineu/">Jun Li</a>,
<a href="https://scholar.google.com/citations?user=6CIDtZQAAAAJ&amp;hl=zh-CN">Jian Yang</a> &#9993;
</p>
{% include paper_links.html arxiv="https://arxiv.org/pdf/2611.28629" %}

<p class="paper-summary">SAP introduces scene-adaptive projection for vision-based 3D occupancy prediction. It predicts metric depth maps and back-projects them into 3D to obtain geometric priors. These priors guide reference sampling to supported height regions, with full-range sampling retained elsewhere.</p>

</div>
</div>


<div class="paper-box" id="showorld" data-publication-category="world-model">
<div class="paper-box-image"><div>
<div class="badge badge--arxiv">arXiv 2026</div>
<a href="https://yanzq95.github.io/projectpage/ShoWorld/"><img src="{{ '/projects/ShoWorld_demo_1334_8s.gif' | relative_url }}" alt="ShoWorld 8-second occupancy forecast compared with COME and ground truth on Occ3D-nuScenes" loading="lazy"></a>
</div></div>
<div class="paper-box-text" markdown="1">
<h3 class="paper-title">ShoWorld: Shape-Faithful Multi-Hypothesis Occupancy World Model</h3>

<p class="paper-authors">
<a href="https://yanzq95.github.io/">Zhiqiang Yan</a>,
<a href="https://scholar.google.com/citations?user=Wtit76gAAAAJ&amp;hl=zh-CN">Guangfa Wang</a>,
<strong>Yuan Wu</strong>,
<a href="https://scholar.google.com/citations?user=6CIDtZQAAAAJ&amp;hl=zh-CN">Jian Yang</a>,
<a href="https://www.comp.nus.edu.sg/~leegh/">Gim Hee Lee</a>
</p>

{% include paper_links.html
  arxiv="https://arxiv.org/pdf/2611.24457"
  project="https://yanzq95.github.io/projectpage/ShoWorld/"
%}

<p class="paper-summary">ShoWorld forecasts where moving objects go and what they look like. A multi-hypothesis motion forecaster predicts probabilistic trajectories whose renderings are fused by their probabilities, and sub-voxel points with any-hit rendering keep object shapes faithful under arbitrary motion.</p>
</div>
</div>


<div class="paper-box" data-publication-category="occupancy"><div class='paper-box-image'><div><div class="badge badge--arxiv">arXiv 2026</div><img src='projects/Arxiv26_HiPR.png' alt="sym"></div></div>
<div class='paper-box-text' markdown="1">

<h3 class="paper-title">Height-Guided Projection Reparameterization for Camera-LiDAR Occupancy</h3>

<p class="paper-authors">
<strong>Yuan Wu</strong>, 
<a href="http://yanzq95.github.io/" style="text-decoration: none;">Zhiqiang Yan</a>  &#9993;, 
<a href="https://scholar.google.com.hk/citations?user=svW3qjkAAAAJ&hl=zh-CN" style="text-decoration: none;">Jiawei Lian</a>, 
<a href="https://wzx0826.github.io/" style="text-decoration: none;">Zhengxue Wang</a>, 
<a href="https://scholar.google.com/citations?user=6CIDtZQAAAAJ&hl=zh-CN" style="text-decoration: none;">Jian Yang</a> &#9993;
</p>

{% include paper_links.html
  arxiv="https://arxiv.org/pdf/2605.05072"
  github="yanzq95/HiPR"
%}

<p class="paper-summary">Most previous methods rely on a fixed projection space, where 3D reference points are uniformly sampled along pillars. However, such sampling struggles to capture the sparsity and height variations of real-world scenes, leading to ambiguous correspondences and unreliable feature aggregation. To address these challenges, we propose HiPR, a camera-LiDAR occupancy framework with Height-Guided Projection Reparameterization.</p>
</div>
</div>

<div class="paper-box" id="founddsr" data-publication-category="depth">
<div class="paper-box-image"><div>
<div class="badge badge--arxiv">arXiv 2026</div>
<img src="{{ '/projects/Arxiv26_FoundDSR.png' | relative_url }}" alt="FoundDSR depth super-resolution overview" loading="lazy">
</div></div>
<div class="paper-box-text" markdown="1">

<h3 class="paper-title">FoundDSR: A Generalizable Foundation Model with Guided 2D Gaussian Splatting for Depth Super-Resolution</h3>

<p class="paper-authors">
<a href="https://wzx0826.github.io/">Zhengxue Wang</a>,
<a href="https://yanzq95.github.io/">Zhiqiang Yan</a> &#9993;,
<strong>Yuan Wu</strong>,
<a href="https://guangweigao.github.io/">Guangwei Gao</a>,
<a href="https://implus.github.io/">Xiang Li</a>,
<a href="https://scholar.google.com/citations?user=6CIDtZQAAAAJ&amp;hl=zh-CN">Jian Yang</a> &#9993;
</p>

{% include paper_links.html
  arxiv="https://arxiv.org/pdf/2609.32323"
%}

<p class="paper-summary">FoundDSR uses high-resolution RGB images to guide 2D Gaussian Splatting for depth super-resolution. It trains on heterogeneous datasets through federated learning and generalizes zero-shot to unseen scenes, upsampling scales, and noise conditions.</p>
</div>
</div>


<div class="paper-box" data-publication-category="depth"><div class='paper-box-image'><div><div class="badge badge--aaai">CVPR 2026</div><img src='projects/CVPR_VLMDC.png' alt="sym"></div></div>
<div class='paper-box-text' markdown="1">

<h3 class="paper-title">Zero-Shot Depth Completion with Vision Language Model </h3>

<p class="paper-authors">
<a href="http://yanzq95.github.io/" style="text-decoration: none;">Zhiqiang Yan</a>,
<strong>Yuan Wu</strong>,
<a href="https://www.comp.nus.edu.sg/~leegh/" style="text-decoration: none;">Gim Hee Lee</a>
</p>

{% include paper_links.html
  arxiv="https://openaccess.thecvf.com/content/CVPR2026/papers/Yan_Zero-Shot_Depth_Completion_with_Vision-Language_Model_CVPR_2026_paper.pdf"
%}

<p class="paper-summary">This paper introduces the first VLM-based depth completion framework. We propose a sparse depth injection mechanism that extends VLM's capability toward 3D perception through three key aspects: visual tokenization, textual prompt, and textual supervision.</p>

</div>
</div>


<div class="paper-box" data-publication-category="depth"><div class='paper-box-image'><div><div class="badge badge--aaai">AAAI 2026</div><img src='projects/AAAI_STDNet.png' alt="sym"></div></div>
<div class='paper-box-text' markdown="1">

<h3 class="paper-title">SpatioTemporal Difference Network for Video Depth Super-Resolution <span class="paper-note">Oral</span></h3>

<p class="paper-authors">
<a href="https://wzx0826.github.io/" style="text-decoration: none;">Zhengxue Wang</a>, 
<strong>Yuan Wu</strong>, 
<a href="http://implus.github.io/" style="text-decoration: none;">Xiang Li</a>,
<a href="http://yanzq95.github.io/" style="text-decoration: none;">Zhiqiang Yan</a>  &#9993;, 
<a href="https://scholar.google.com/citations?user=6CIDtZQAAAAJ&hl=zh-CN" style="text-decoration: none;">Jian Yang</a> &#9993;
</p>

{% include paper_links.html
  arxiv="https://arxiv.org/pdf/2508.01259?"
  github="yanzq95/STDNet"
%}

<p class="paper-summary">We propose STDNet, a novel framework for video depth super-resolution. STDNet introduces spatial and temporal difference mechanisms to mitigate long-tailed effects in video depth super-resolution. This design enables precise depth calibration and motion compensation, leading to state-of-the-art performance.</p>
</div>
</div>


<div class="paper-box" data-publication-category="occupancy"><div class='paper-box-image'><div><div class="badge badge--neurips">NeurIPS 2025</div><img src='projects/NIPS25_LIAR.png' alt="sym"></div></div>
<div class='paper-box-text' markdown="1">

<h3 class="paper-title">See through the Dark: Learning Illumination-affined Representations for Nighttime Occupancy Prediction</h3>

<p class="paper-authors">
<strong>Yuan Wu</strong> *,
<a href="http://yanzq95.github.io/" style="text-decoration: none;">Zhiqiang Yan</a> *, 
Yigong Zhang &#9993;, 
<a href="http://implus.github.io/" style="text-decoration: none; ">Xiang Li</a>, 
<a href="https://scholar.google.com/citations?user=6CIDtZQAAAAJ&hl=zh-CN" style="text-decoration: none;">Jian Yang</a> &#9993;
</p>

{% include paper_links.html
  arxiv="https://arxiv.org/pdf/2505.20641"
  github="yanzq95/LIAR"
%}
<p class="paper-summary">Existing vision-based methods perform well on daytime benchmarks but struggle in nighttime scenarios due to limited visibility and challenging lighting conditions. We introduce LIAR, a novel framework that learns illumination-affined representations for nighttime occupancy prediction.</p>
</div>
</div>

<div class="paper-box" data-publication-category="occupancy"><div class='paper-box-image'><div><div class="badge badge--icra">ICRA 2025</div><img src='projects/ICRA25_DHD.png' alt="sym"></div></div>
<div class='paper-box-text' markdown="1">

<h3 class="paper-title">Deep Height Decoupling for Precise Vision-based 3D Occupancy Prediction</h3>

<p class="paper-authors">
<strong>Yuan Wu</strong> *,
<a href="http://yanzq95.github.io/" style="text-decoration: none;">Zhiqiang Yan</a> * &#9993;, 
<a href="https://wzx0826.github.io/" style="text-decoration: none;">Zhengxue Wang</a>, 
<a href="http://implus.github.io/" style="text-decoration: none;">Xiang Li</a>, 
<a href="https://fpthink.github.io/" style="text-decoration: none;">Le Hui</a>, 
<a href="https://scholar.google.com/citations?user=6CIDtZQAAAAJ&hl=zh-CN" style="text-decoration: none;">Jian Yang</a> &#9993;
</p>

{% include paper_links.html
  arxiv="https://arxiv.org/pdf/2409.07972?"
  github="yanzq95/DHD"
  star=true
%}
<p class="paper-summary">For the first time, we introduce the explicit height prior into the vision-based 3D occupancy prediction task. Owing to the novel deep height decoupling and sampling strategy, our model achieves state-of-the-art performance even with minimal input cost.</p>
</div>
</div>


</div>

<button class="publication-toggle" type="button" aria-controls="publication-list" aria-expanded="false" hidden>Click to expand</button>

# 🎖 Honors and Awards
- *2024.06*: Outstanding Graduates of NJUST

  
# 📖 Education
- *2024.09 - present*: Ph.D. student, School of Computer Science and Engineering, NJUST
- *2020.09 - 2024.06*: B.Eng., School of Intelligent Manufacturing, NJUST

