cart
===========

A simple shopping cart package for meteorjs that uses stripe for payments

Run the example app with `meteor --settings settings.json` - settings are needed for stripe api keys

Live demo at http://cartdemo.meteor.com


------

messy notes below....


Exports `Cart` object

creates a collection that is accessible at `Cart.Items`
Cart.Items must have a `price` field


Session vars that are set for you
`cart-itemCount`
`cart-itemTotal`


amplify is used to generate and deviceId (in session as `cart-deviceId`) - if there is no logged in user, the items added to the cart are attached to the device - if there is a logged in user, the items are attached to the user -- if items are added to the cart as a non-logged in user, then the user logs in, the item attachment is moved from the device to the user

eg:
not logged in
item = 
{
deviceId:"XXXX"
}

logged in
item 
{
userId:"XXXX"
}

when a user logs in, any items that have a matching deviceId but no userId have the deviceId removed and and a userId added




TODO:
using accounting.js to format money
callback for what to do after payment
option to adjust what to do with items after payemnt (instead of just delete)
add cart preview route
adjust quantity
remove items from cart
bootstrap styling by default