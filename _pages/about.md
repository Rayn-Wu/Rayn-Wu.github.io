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


Hi there, I am Yuan Wu (吴渊). I am currently a second-year Ph.D. student at <a href="http://www.patternrecognition.asia/" style="text-decoration: none;">PCALab</a>, School of Computer Science and Engineering, Nanjing University of Science and Technology, supervised by <a href="https://scholar.google.com.hk/citations?user=6CIDtZQAAAAJ&hl=en" style="text-decoration: none;">Prof. Jian Yang</a> and co-supervised by <a href="http://yanzq95.github.io/" style="text-decoration: none;">Dr. Zhiqiang Yan</a>. My research interests lie in 3D computer vision, with a particular focus on 3D perception and scene understanding. If you're interested in my work, feel free to reach out with any questions or suggestions! 😊



# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Arxiv 2026</div><img src='projects/Arxiv26_HiPR.png' alt="sym" style="width: auto; height: auto;"></div></div>
<div class='paper-box-text' markdown="1">

Height-Guided Projection Reparameterization for Camera-LiDAR Occupancy

<strong>Yuan Wu</strong>, 
<a href="http://yanzq95.github.io/" style="text-decoration: none;">Zhiqiang Yan</a>  &#9993;, 
<a href="https://scholar.google.com.hk/citations?user=svW3qjkAAAAJ&hl=zh-CN" style="text-decoration: none;">Jiawei Lian</a>, 
<a href="https://wzx0826.github.io/" style="text-decoration: none;">Zhengxue Wang</a>, 
<a href="https://scholar.google.com/citations?user=6CIDtZQAAAAJ&hl=zh-CN" style="text-decoration: none;">Jian Yang</a> &#9993;

{% include paper_links.html
  arxiv="https://arxiv.org/pdf/2605.05072"
  github="yanzq95/HiPR"
%}

- We propose HiPR, a camera-LiDAR occupancy framework that adaptively reparameterizes the projection space using a LiDAR-derived BEV height prior, achieving state-of-the-art performance with real-time inference.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2026</div><img src='projects/AAAI_STDNet.png' alt="sym" style="width: auto; height: auto;"></div></div>
<div class='paper-box-text' markdown="1">

SpatioTemporal Difference Network for Video Depth Super-Resolution (**Oral**)

<a href="https://wzx0826.github.io/" style="text-decoration: none;">Zhengxue Wang</a>, 
<strong>Yuan Wu</strong>, 
<a href="http://implus.github.io/" style="text-decoration: none;">Xiang Li</a>,
<a href="http://yanzq95.github.io/" style="text-decoration: none;">Zhiqiang Yan</a>  &#9993;, 
<a href="https://scholar.google.com/citations?user=6CIDtZQAAAAJ&hl=zh-CN" style="text-decoration: none;">Jian Yang</a> &#9993;

{% include paper_links.html
  arxiv="https://arxiv.org/pdf/2508.01259?"
  github="yanzq95/STDNet"
%}

- We propose STDNet, a novel framework for video depth super-resolution. STDNet introduces spatial and temporal difference mechanisms to mitigate long-tailed effects in video depth super-resolution. This design enables precise depth calibration and motion compensation, leading to state-of-the-art performance.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2025</div><img src='projects/NIPS25_LIAR.png' alt="sym" style="width: auto; height: auto;"></div></div>
<div class='paper-box-text' markdown="1">

See through the Dark: Learning Illumination-affined Representations for Nighttime Occupancy Prediction

**Yuan Wu** *, 
<a href="http://yanzq95.github.io/" style="text-decoration: none;">Zhiqiang Yan</a> *, 
Yigong Zhang &#9993;, 
<a href="http://implus.github.io/" style="text-decoration: none; ">Xiang Li</a>, 
<a href="https://scholar.google.com/citations?user=6CIDtZQAAAAJ&hl=zh-CN" style="text-decoration: none;">Jian Yang</a> &#9993;

{% include paper_links.html
  arxiv="https://arxiv.org/pdf/2505.20641"
  github="yanzq95/LIAR"
%}
- Existing vision-based methods perform well on daytime benchmarks but struggle in nighttime scenarios due to limited visibility and challenging lighting conditions. We introduce LIAR, a novel framework that learns illumination-affined representations for nighttime occupacy prediction.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICRA 2025</div><img src='projects/ICRA25_DHD.png' alt="sym" style="width: auto; height: auto;"></div></div>
<div class='paper-box-text' markdown="1">

Deep Height Decoupling for Precise Vision-based 3D Occupancy Prediction

**Yuan Wu** *, 
<a href="http://yanzq95.github.io/" style="text-decoration: none;">Zhiqiang Yan</a> * &#9993;, 
<a href="https://wzx0826.github.io/" style="text-decoration: none;">Zhengxue Wang</a>, 
<a href="http://implus.github.io/" style="text-decoration: none;">Xiang Li</a>, 
<a href="https://fpthink.github.io/" style="text-decoration: none;">Le Hui</a>, 
<a href="https://scholar.google.com/citations?user=6CIDtZQAAAAJ&hl=zh-CN" style="text-decoration: none;">Jian Yang</a> &#9993;

{% include paper_links.html
  arxiv="https://arxiv.org/pdf/2409.07972?"
  github="yanzq95/DHD"
  star=true
%}
- For the first time, we introduce the explicit height prior into the vision-based 3D occupancy predition task. Owing to the novel deep height decoupling and sampling stratagy, our model achieves state-of-the-art performance even with minimal input cost.
</div>
</div>


# 🎖 Honors and Awards
- *2024.06*: Outstanding Graduates of Nanjing University of Science and Technology

  
# 📖 Educations
- *2024.09 - present*: Ph.D. student, School of Computer Science and Engineering, Nanjing University of Science and Technology
- *2020.09 - 2024.06*: B.Eng., School of Intelligent Manufacturing, Nanjing University of Science and Technology

