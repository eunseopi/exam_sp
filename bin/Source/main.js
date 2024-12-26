
main = class main extends AView
{
	constructor()
	{
		super()

		//TODO:edit here

	}

	init(context, evtListener)
	{
		super.init(context, evtListener)

		//TODO:edit here

	}

	onInitDone()
	{
		super.onInitDone()

		//TODO:edit here

        this.mainView.addTab('main','Source/TestView.lay','main');
		this.mainView.addTab('doc','Source/views/documentView.lay','doc');
		this.mainView.addTab('com','Source/views/CommunityView.lay','com');
        // this.mainView.addTabEx('intro','Source/views/IntroduceView.lay','intro');

        this.mainView.selectTabById('main');

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}

}

