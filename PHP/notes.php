<?php

// print values
echo $my_unonimous_variable;
var_dump($my_unonimous_variable);

//////////////////////
// 0.0 Value Types //
////////////////////

$my_str_type_val = "str";
gettype($my_str_type_val);

is_string("STR");
is_int(5);
is_double(1.2);
is_float(1.2);
is_numeric("3.25");
is_nan($my_str_type_val);
is_bool($my_str_type_val);
is_array($my_str_type_val);
is_object($my_str_type_val);

//////////////////////////
// 1.0 create variable //
////////////////////////

// decalre variable
$my_variable = "some value here";

// check if variable is declared
isset($my_variable); // true || false

// create constant
define("PI", 13);
echo PI;

// built in constants
echo SORT_ASC;
echo PHP_INT_MAX;
echo PHP_INT_MIN;
// .etc

//////////////////
// 2.0 Strings //
////////////////

$test_str = " Hello World  ";

strlen($test_str); // str lenght
trim($test_str); // "Hello World"
ltrim($test_str); // "Hello World "
rtrim($test_str); // " Hello World"
str_word_count($test_str); // 2
strrev($test_str); // " dlroW olleH "
strtoupper($test_str); // " HELLO WORLD "
strtolower($test_str); // " hello world "
ucfirst("hello"); // "Hello"
lcfirst("HELLO"); // "hELLO"
ucwords("hello world"); // "Hello World"
strpos($test_str, "world"); // "" -> case sensitive string index position
stripos($test_str, "world"); // 10 -> incase sensitive string index position
substr($test_str, 8); // letters from 8 index until the end
str_replace(" ", "", $test_str); //  replace in case sensitive way
str_ireplace(" ", "", $test_str); // replace in case innsensitive way
explode(" ", $test_str); // ["Hello", "World"]


$longText = "
    Hello, my name is John
    I am <b>27</b>
    I love coding
";

echo $longText; // "Hello, my name is John I am 27 I love coding" // includes bold weight
echo nl2br($longText); // includes line breaks // includes bold weight
echo htmlentities($longText); // dont reserves line  breaks and tags are shown as text
nl2br(htmlentities($longText)); // reserves line breaks and tag are shown as text

//////////////////
// 3.0 numbers //
////////////////

abs(-15); // 15
pow(2, 3); // 8 -> 2*2*2;
sqrt(16); // 4
max(2, 3); // 3
min(2, 3); // 2
round(2.4); // 2
round(2.6); // 3
floor(2.6); // 2
ceil(2.4); // 3

$my_big_num = 123456789.1234;
number_format($my_big_num, 2, ',', " "); // 123 456 789,12

// Mathematical Operators
$num_a = 2;
$num_b = 1;

$num_a - $num_b;
$num_a + $num_b;
$num_a * $num_b;
$num_a / $num_b;
$num_a % $num_b;

($num_a + $num_b) * $num_a;

$num_a += $num_b;
$num_a -= $num_b;
$num_a *= $num_b;
$num_a /= $num_b;
$num_a %= $num_b;

$num_a++;
++$num_a;
$num_a--;
--$num_a;

(int)"9"; // 9
(float)"9.2"; // 9.2
intval("9"); // 9
floatval("9"); // 9.2

////////////////
// 4.0 Arrays//
//////////////

// declare array
$fruits = ["apple", "orange", "cherry"];
$fruits_2 = array("apple", "orange", "cherry");

// check length
count($fruits);

// access array by index
$fruits[0];

// rewrite array at specific index
$fruits[0] = "pear";

// check array at specific index
isset($fruits[0]); // true
isset($fruits[4]); // false

// append element
array_push($fruits, "foo"); // appends in the end
array_unshift($fruits, "bar"); // appends in the start
$fruits[] = "plum"; // ["apple", "orange", "cherry", "plum]

// remove element
array_pop($fruits); // removes last element
array_shift($fruits); // removes first element

// consolidate
implode(" ", $fruits);
join(" ", $fruits); // "apple orange cherry"

// check if array includes el
in_array("apple", $fruits); // true

// search el index
array_search("apple", $fruits); // if not exists returns false otherwise returns index

// merge arrays
array_merge($fruits, $fruits_2);
[...$fruits, ...$fruits_2];

// sort arrays
sort($fruits);
rsort($fruits); // reverse sort

// destructure
list($a_val, $b_val) = array(1, 2);

////////////////////////////
// 4.1 Associative Arrays//
//////////////////////////

$person = [
    "name" => "john",
    "surname" => "rusieshvili",
    "age" => 27,
    "hobbies" => ["volleyball", "listening to music"]
];

$person["name"]; // john
$person["proffesian"] = "developer"; // adds field named "proffesian" with value  of "developer"

array_keys($person); // ["name","surname","age","hobbies"]
array_values($person); // ["john","rusieshvili",27,["volleyball","listening to music"]]
ksort($person); // sort by keys
asort($person); // sort by values

/////////////////////////////////
// 4.2 Two Dimensional Arrays //
///////////////////////////////

$todos = [
    [
        "title" => "todo 1",
        "completed" => true
    ],
    [
        "title" => "todo 2",
        "completed" => false
    ],
];

////////////////
// 4.3 Loops //
//////////////

// while
$counter = 0;
while ($counter <= 100) {
    if ($counter === 5) break;
    $counter++;
};

// do - while

do {
    $counter++;
} while ($counter <= 10);

// for

for ($i = 0; $i < 10; $i++) {
    echo $i;
};

$my_array = array(1, -1, 2, 3, 6, -4, 7, 10);
$my_unonimous_variable = 0;

// map

$my_duplicated_array = array_map(function ($num) {
    return $num * 2;
}, $my_array);

// foreach

foreach ($my_duplicated_array as $i => $num) {
    $my_unonimous_variable = $my_unonimous_variable + $num;
};

// iterate over associative array

foreach ($person as $key => $value) {
    if (is_array($value)) {
        echo $key . ' ' . implode(",", $value);
    } else {
        echo $key . ' ' . $value;
    };
};



/////////////////////
// 5.0 Conditions //
///////////////////

$age = 20;
$salary = 300000;

// if / else
if ($age >= 20) echo "1";
else if ($age <= 20 && $age >= 10) echo "2";
else echo "0";


// ternary
echo 1 === 1 ?  "Hay, It's equeal! " : "It's not equal!";
$my_age = $age ?: 27; // if age asign the age otherwise 27

// nullish coalescing
$nullable_var = null;
$another_var = null;
$nullable_var ??= "unknown";
$nullable_var = $another_var ?? "John";

// switch statement
$userRole = "admin";

switch ($userRole) {
    case "admin":
        echo "admin";
        break;
    case "editor":
        echo "editor";
        break;
    default:
        echo "invalid role";
};


////////////////////
// 6.0 functions //
//////////////////

// function with args

function myFn($num)
{
    return $num * 2;
};

myFn(5);

// create sum of two functions
function sum(...$nums)
{
    $sum = 0;

    foreach ($nums as $num) {
        $sum += $num;
    };

    return $sum;
};

sum(1, 2, 3, 4, 5);

// arrow functions

function sum_reduce(...$nums)
{
    $sum = 0;

    array_reduce($nums,  fn ($acc, $num) => $acc + $num);

    return $sum;
};

sum_reduce(1, 2, 3, 4, 5);

////////////////
// 7.0 Dates //
//////////////

date("Y-m-d H:i:s"); // curren date
date('Y-m-d H:i:s', time() - 60 * 60 * 24); // yesterday
date('F j Y, H:i:s');
time(); // current time in seconds
date_parse('2020-10-12 09:00:00'); // parse date -> returns associative array with keys: year,month,day,hour,minute,second

$date_str = "February 4 2020 12:45:35";
$parsed_date = date_parse_from_format('F j Y H:i:s', $date_str);

///////////////////////
// 8.0 File Systems //
/////////////////////

__DIR__; // current directory
__FILE__; // file path where __FILE__ is called
__LINE__; // line num where __LINE__ is called


mkdir("new foldrer"); // create dir
rename("new folder", "new foldrer 2"); // rename dir
rmdir("new folder 2"); // delete dir

scandir("./"); // shows all the files and folders in specified path directory
file_get_contents("lorem.txt"); // read file
file_put_contents("sample.txt", "hello this is sample.txt file"); // write files
$users = file_get_contents("https://jsonplaceholder/users");
json_decode($users, true); // parse json -> true converts in to associative array
file_exists("sample.txt"); // checks if file exists
is_dir("new folder"); // checks if directory exists

///////////////
// 9.0 OOP //
////////////

class Person
{
    public string $name;
    public string $surname;
    private ?int $age;
    /* 
    private properties could not be accessed from outside the class,
    even from extended classes. But Could be accessed 
    from setter  and getter functions of this class;
    */
    protected int $id;
    /* 
    protected properties could not be accessed from outside the class,
    But Could be accessed from extennded class and even setter and getter functions of this class;
    */

    public static int $counter = 0;
    /**
     static properties belongs only class itself, not  instances created from this class.
     f.e we  increase $counter propertie every time when instance is created and then from the outside we check Person::$counter 
     this will show us number wich one describes how many instance is created  from this class.
     inside the class if we  want to access this property we use self::$counter
     */

    public function __construct($name, $surname)
    {
        $this->name = $name;
        $this->surname = $surname;
        self::$counter++;
    }

    public function setAge($age)
    {
        $this->age = $age;
    }

    public function getAge()
    {
        return $this->age;
    }

    public static function getCounter()
    {
        return self::$counter;
    }
}

$person = new Person("John", "Rusieshvili");
$person_name = $person->name;
$person->name = "Johnny";

$person->setAge(27);
$person_age = $person->getAge();

$users_count = Person::$counter;

class Student extends Person
{
    public string $degree;

    public function __construct($name, $surname, $degree)
    {
        parent::__construct($name, $surname);
        $this->degree = $degree;
    }
}

$student = new Student("Student", "Studentovich", "Bachelor");