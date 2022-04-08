(1..100).each { |number|
 list = []
 
 if number % 3 == 0
  list.push("People")
 end
 if number % 5 == 0
  list.push("Power")
 end

 puts list.size > 0 ? list.join(" ") : number.to_s
}