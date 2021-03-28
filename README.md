# Pani-energy Interview Challenge

Oh, hi there!

Let me walk you through how this thing works.

### Setup

First thing first, I know that each feature can contain another feature or price, assuming one of them has to be null, we are dealing with a tree here. Since the data and the UI are both trees, we can simply render the <Feature /> component recursively.

I also assumed that each feature has a unique name relative to the branch and its nest level, so I make a template literal that gets build as we pass the feature object down the component tree.

The base case for the recursive <Feature /> component is when `isChecked && price !== null` so we can stop rendering the next level.

### Reverse waterfall

When we check the checkbox which is controlled by the `isChecked` state, an useEffect gets triggered to update its price to the local `total` state, in the case when there is no price, the base case is no longer valid, we render the next level.

Another useEffect is mounted to monitor local `total` updates, and it will update its parent's `total` to reflect itself changes, and the parent's `total`'s update will trigger parent's-parent's `total`'s update, etc, which updates the root App's state which is subscribed by the <Footer /> component.

We can't just set parent's `total` with the child's `total` directly, because there may be other siblings that can also have their `total` stored in the parent. To solve this problem, we keep a `prevTotal` and use it to determine the difference between each update, and only use this value to update the parent's `total`.

### Apply discount

The next problem we need to tackle is the discount functionality, which took the longest for me to solve. Assume only features with a non-null price can receive a discount, and discount is only scoped inside the lowest level within ONE branch, and the discount is applied after there is at least one sibling feature already checked.

Initially, I went with checking whether the parent has a `total` more than 0 to determine the discount, but I found there is a way to hack it and get all children to discount

So I added a local `_price` state to make my life easier on updating the price. I also added an `_checkedChildren` state array to keep track of which children are already checked, this state is exclusively used by child components. So when there is parent's `checkedChildren`'s length is more than 0, we start to determine discount.

Now `checkedChilren` not empty, we simply need to check if the current feature is the first element in it. If true, we don't apply the discount, and if false, we apply the discount.

And finally, we need to reset the price if none of the above is true.
