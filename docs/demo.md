# Demo using morph

> [!IMPORTANT]
> This is an idea of ​​how morph should work in practice,
> if you have suggestions on how it can be done better please feel free to contact me.

## Description

Being an agnostic framework you can use it in your HTML elements and save yourself enough time when creating your application.

## Example

### Basic element

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1 class="m-title m-bold">My First Heading</h1>
    <p class="m-description">My first paragraph.</p>
    <button class="m-button m-button-primary"></button>
  </body>
</html>
```


### Layout element

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
      <section class="m-card m-card-shadow m-card-border-none">
            <h2 class="m-card-title-sm m-bold">Title Card</h2>
              <div class="m-card-content">...</div>
      </section>
  </body>
</html>
```