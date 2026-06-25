# FacePlex

Source code for the [FacePlex](https://hahminlew.github.io/faceplex/) project page,
which accompanies the paper:

**FacePlex: Full-Duplex Joint Speech-Facial Motion Generation for Conversational Avatars.**

[Habin Lim](https://binhaim.github.io)\*, [Jae-Ho Lee](https://github.com/JH-LEE-KR)\*, [Hah Min Lew](https://hahminlew.github.io)\*, Ji-Su Kang, [Gyeong-Moon Park](https://vgi.korea.ac.kr).
*(\* equal contribution)*

The page layout is built on top of the awesome [Nerfies](https://nerfies.github.io)
template (via the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template)),
with additional styling carried over from [TexAvatars](https://summertight.github.io/TexAvatars/).
Thanks to all of the above for sharing their templates.

## Local preview

This is a static HTML/CSS/JS site — no build step required:

```bash
# from the repo root
python3 -m http.server 8000
# then open http://localhost:8000
```

All third-party JS/CSS (jQuery, Bulma, Bulma Carousel, FontAwesome) is vendored under
`static/`, so the page renders correctly even without internet (Google Fonts and
academicons fall back gracefully).

## Citation

If you find FacePlex useful for your work, please cite:

```bibtex
@article{lim2026faceplex,
  title   = {FacePlex: Full-Duplex Joint Speech-Facial Motion Generation for Conversational Avatars},
  author  = {Lim, Habin and Lee, Jae-Ho and Lew, Hah Min and Kang, Ji-Su and Park, Gyeong-Moon},
  journal={arXiv e-prints},
  pages={arXiv--2606},
  year    = {2026}
}
```

## Website License

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />
This website is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).
