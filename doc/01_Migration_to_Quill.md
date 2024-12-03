# Migration to Quill 

Every WYSIWYG-Editor (TinyMCE, CKEditor, ...) has its own peculiarities, that means that they are never 100% compatible to each other. Potential incompatibilities can result into different markup or styling, in rare edge-cases even in a kind of data-loss if the existing markup is not supported by Quill. Therefore it's important to check your existing contents for compatibility with the editor. 

## Configuration

Change the twig and public configs according to [config options](https://quilljs.com/docs/configuration/)

## Tables & Lists

Tables & Lists form TinyMCE could be displayed different in Quill than in TinyMCE. Please check your fields after migration.


