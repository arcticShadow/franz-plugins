# Franz Plugins!

To use one of these plugins, you need to directory in your Franz Plugins Directory. Typically `~/Library/Application Support/Franz/Plugins` but may vary. You can also open Franz, open the setting scroll to the bottom and choose to open Plugin Directory.

My Desired way to add plugins to to checkout this repo, and link the plugins into the directory.

```bash
ln -s ~/repos/franz-plugins/office365-outlook ~/Library/Application\ Support/Franz/Plugins
```

## Apps
Lets be honest - just look at the directories in the top level. It's going to be more up to date. 

## Caveat
Teams dosn't currently work with standard Franz - Related to the fact that Teams (Web App) is built for electron, when it detects Electrons user agent, it try's to do things it's not allowed to.

Until Franz acknowledge my Support ticket, or my fix, I have hacked open Franz and sort of patched it to work. (The only change I have made, is forcibly changing the user agent to a chrome/windows string)

You can download my Patched version of [Franz from this repo](Franz.app.zip).