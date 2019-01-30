# Gekko Plus Marketplace information

This repo holds some information about the Gekko Plus Marketplace. The Marketplace is part of the official Gekko Plus service that provides easy access to Gekko algorithms to non technical users.

If you have created your own Gekko strategies you can monetize them in the Marketplace, how this works:

1. Create a (free) account on Gekko Plus.
2. Upload your strategy on Gekko Plus.
3. Once it's approved and passes and functional requirements (see below) it will be listed in the marketplace.
4. Gekko Plus subscribers are able to run your strategy in a real trade bot (inside Gekko Plus), if they do **you will get paid every day** for as long as they run the tradebot. You'll get paid per user, so the more users run your strateg, the more you will get paid. (note that revenue is paid out monthly).

As stated in step 3, your strategy will only be listed if it passes validation and functional requirements. You can find the requirements regarding validation, detailed information uploads, payment information and other details in the **Gekko Plus Creator Agreement**. The functional requiements are tested automatically by the Gekko Plus platform. See below for details.

## Links

- The Gekko Plus platform: [app.gekkoplus.com](https://app.gekkoplus.com)
- The Gekko Plus marketplace: [app.gekkoplus.com/marketplace](https://app.gekkoplus.com/marketplace)
- The Gekko Plus Creator Agreement: [gekkoplus.com/creator-agreement.pdf](https://gekkoplus.com/creator-agreement.pdf)

## Functional requirements

Gekko Plus is designed for crypto investors that want an easy and simple way to manage their crypto holdings. They can do this using strategies in the marketplace. While Gekko Plus is completely unbiased about the strategies creators upload, we do automatically run a functional requirements test to make sure all strategies available in the marketplace pass our quality level.

For example if your strategy loses a lot of capital as opposed to market, or if your strategy trades more often than Gekko can safely manage **your strategy will be hidden from the marketplace**. This check is performed automatically at every highlight simulation, which is used to enhance your strategy with performance statistics within the Gekko Plus platform.

The functional requirements test can be found in this repo at `functionalRequirements/test.js`. It consumes a [Gekko performanceReport](https://gekko.wizb.it/docs/internals/events.html#performanceReport-event) and will return an object, if the passed propery is false, your strategy will NOT be visibile in the marketplace and thus Gekko Plus subscribes will NOT be able to run your strategy.

If your strategy is currently not passing functional requirements you will see this in the creator settings dashboard, as shown in this screenshot:

![screenshot of gekko plus creator settings dashboard](https://user-images.githubusercontent.com/969743/51963498-cf212780-249e-11e9-962c-25d05ce3d96a.png)