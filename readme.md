## Homepage Structure
_Last update June 27, 2017_

For convenience (and later on SEO purposes) I deconstructed the homepage so it now points to includes for each section.

All the different sections can be found in the includes directory:

* **head** - Includes the `<html>` tag as well as all the head and meta stuff the goes in there
* **title** - Includes the title header for each page as well as the `<body>` tag.
* **content layer** - Is not in the includes (yet?) and have the main content of the page (post, homepage, etc)
* **footer** - Includes the footer stuff
* **scripts** - Includes the scripts section starts with `</body>` and ends with `/<html>`

## Post Structure [WIP]
_Last update June 28, 2017_

- [ ] **Head and title** should be pulled from `_includes`.
- [ ] **H1** should be pulled from the post header `param`.
- [ ] **Header image** should be called from an include with a passing param of the image name linking to the assets directory. This should be a set condition.
- [ ] If no image called from the include, use a default image
- [ ] Images should be used for the social sharing (Facebook's open graph etc)
- [ ] Text from the post itself, should pull from the file. All g here.
- [ ] **Post navigation** - Next one, last one etc
- [ ] **Footer** - from `_includes`..
