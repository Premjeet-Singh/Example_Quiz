var results=document.querySelector('.results');
function submitAnswers()
{
	var total=5,score=0,correct=0,incorrect=0;

	// Get User Inputs......................
	console.log("Sample Javascript Quiz...");
	var q1=document.forms["quizForm"]["q1"].value;
	var q2=document.forms["quizForm"]["q2"].value;
	var q3=document.forms["quizForm"]["q3"].value;
	var q4=document.forms["quizForm"]["q4"].value;
	var q5=document.forms["quizForm"]["q5"].value;

	// Validation....................

	for(var i=1;i<=total;i++)
	{
		if(eval('q'+i)==null || eval('q'+i)=="")
		{
			alert("You missed question: "+i);
			return false;
		}
	}

	// ....Set Answers........
	var answers=["b","a","c","b","c"];

	// Check Answers..............

	for(var i=1;i<=total;i++)
	{
		if(eval('q'+i)==answers[i-1])
		{
			score++;
			correct++;
		}
		else{
			score-=0.25;
			incorrect++;
		}
	}
	// Display Results.............
	var results=document.querySelector('.results');
	results.innerHTML='<h3> You scored <span>'+score+'</span> out of <span>'+total+'</span></h3><h5>Correct Answer: <span>'+correct+'</span></h5><h5>Incorrect Answer: <span>'+incorrect+'</span></h5>';


	// alert("you scored "+score+" out of "+total);
	return false;
}