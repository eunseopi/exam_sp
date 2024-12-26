
MiddleView = class MiddleView extends AView
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


	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}


	onPrevBtnClick(comp, info, e)
	{

		//TODO:edit here
        this.middleView.slidePrev();
	}

	onNextBtnClick(comp, info, e)
	{
		//TODO:edit here
        this.middleView.slideNext();
	}
}

